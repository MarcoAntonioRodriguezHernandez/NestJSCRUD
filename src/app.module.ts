import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PersonModule } from "./person/person.module";
import { ChildModule } from "./child/child.module";
import { HouseModule } from "./house/house.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Child } from "./child/child.entity";
import { House } from "./house/house.entity";
import { Person } from "./person/person.entity";

@Module({
  imports: [PersonModule, ChildModule, HouseModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "rA&Jc5Xf9d!h!YSK",
      database: "population",
      entities: [__dirname + '/../dist/**/*.entity.{js}', Child, House, Person],  // Incluir la entidad Child
      synchronize: false
    }),
    PersonModule,
    ChildModule,
    HouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
}
