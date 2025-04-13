import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { json, urlencoded } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
      stopAtFirstError: true,
      validationError: { target: false },
      transform: true,
    })
  );

  // Enable Cross-Origin Resource Sharing (CORS)
  app.enableCors();

  // Configure body parsers for handling JSON and URL encoded data
  app.use(json({ limit: "5mb" }));
  app.use(urlencoded({ extended: true, limit: "5mb" }));

  await app.listen(process.env.PORT ?? 3000);
  console.log(`App listen in port ${process.env.PORT ?? 3000}`);
}
bootstrap();
