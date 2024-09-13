import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { createGoalCompletionRoute } from "./routes/create-completion";
import { getWeekPendingGoalsRoute } from "./routes/get-pending-goals";
import { getWeekSummaryRoute } from "./routes/get-summary";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute)
app.register(createGoalCompletionRoute);
app.register(getWeekPendingGoalsRoute);
app.register(getWeekSummaryRoute);

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("Server running on 3000");
  });
