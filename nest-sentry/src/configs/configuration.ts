import 'dotenv/config';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  sentryDsn: process.env.SENTRY_DSN,
});
