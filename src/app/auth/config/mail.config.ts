import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10) || 2525,
  username: process.env.SMTP_USERNAME,
  password: process.env.SMTP_PASSWORD,
  defaultFrom: `My Blog <no-reply@nestjs-blog.com>`,
}));
