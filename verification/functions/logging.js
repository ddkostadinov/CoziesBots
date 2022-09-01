const { createLogger, format, transports } = require("winston");
const path = require("path");
const winston = require("winston");
const logFormat = format.printf((info) => {
  const { timestamp, level, label, message, ...rest } = info;
  let log = `[${timestamp}] ${level} [${label}]: ${message}`;

  if (!(Object.keys(rest).length === 0 && rest.constructor === Object)) {
    log = `${log}\n${JSON.stringify(rest, null, 2)}`.replace(/\\n/g, "\n");
  }
  return log;
});

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.errors({ stack: true }),
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: "dd/MM/YY hh:mm:ss a" })
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), logFormat),
    }),
    new transports.File({
      filename: path.join(__basedir, "logs/full.log"),
      level: "info",
      colorize: true,
      timestamp: function () {
        return new Date().toLocaleTimeString();
      },
      prettyPrint: true,
    }),
    new transports.File({
      filename: path.join(__basedir, "logs/error.log"),
      level: "warn",
      colorize: true,
      timestamp: function () {
        return new Date().toLocaleTimeString();
      },
      prettyPrint: true,
    }),
  ],
});

winston.addColors({
  debug: "bold green",
  info: "blue",
  warn: "yellow",
});

module.exports = logger;
