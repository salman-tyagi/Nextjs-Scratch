import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Hi there!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

(async () => {
  const app = await NestFactory.create(AppModule);

  const PORT = 8000;

  app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
  });
})();
