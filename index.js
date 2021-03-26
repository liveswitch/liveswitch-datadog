import { datadogLogs } from '@datadog/browser-logs'

class DataDogLogProvider extends fm.liveswitch.LogProvider {
    constructor(options) {
        super()
        this.setLevel(options.logLevel);
        this.options = options;
        
        datadogLogs.init(options);
        datadogLogs.addLoggerGlobalContext('email', options.email || 'unknown@test.com')
    }
    doLog(logItem){
        var message = logItem.getMessage();
        switch (logItem.getLevel()) {
            case fm.liveswitch.LogLevel.Error:
                datadogLogs.logger.error(message, logItem);
                break;
            case fm.liveswitch.LogLevel.Warn:
                datadogLogs.logger.warn(message, logItem);
                break;
            case fm.liveswitch.LogLevel.Info:
                datadogLogs.logger.info(message, logItem);
                break;
            case fm.liveswitch.LogLevel.Debug:
            case fm.liveswitch.LogLevel.Verbose:
                datadogLogs.logger.debug(message, logItem);
                break;
        }
    }
}
  
exports.DataDogLogProvider = DataDogLogProvider;