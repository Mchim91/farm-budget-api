import { Global, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigType } from '@nestjs/config';
import mailConfig from '../auth/config/mail.config';
import { MailService } from './providers/mail.service';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [mailConfig.KEY],
      useFactory: (mailConfiguration: ConfigType<typeof mailConfig>) => ({
        transport: {
          host: mailConfiguration.host,
          port: mailConfiguration.port,
          auth: {
            user: mailConfiguration.username,
            pass: mailConfiguration.password,
          },
        },
        defaults: {
          from: mailConfiguration.defaultFrom,
        },
        template: {
          dir: join(__dirname, '../mail/templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
