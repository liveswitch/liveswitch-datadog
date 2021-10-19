# liveswitch-datadog

A simple log provider that uses datadog as a target for LiveSwitch logging.

https://docs.datadoghq.com/logs/log_collection/javascript/

This package depends on the package provided by DataDog. You don't have to include this in your app, it's already referenced by this package: 

```javascript
import { datadogLogs } from '@datadog/browser-logs'
```


Install the package:

```bash
npm install @frozenmountain/liveswitch-datadog
```

Import the package:

```javascript
import { DataDogLogProvider } from '@frozenmountain/liveswitch-datadog'
```

Use the package:

```javascript
var provider = new DataDogLogProvider({
    clientToken: '- put your client token here -',
    service: '- put your app name here -',
    site: 'datadoghq.com',
    forwardErrorsToLogs: true,
    sampleRate: 100,
    email: '- email address for tracking who created the log -',
    logLevel: fm.liveswitch.LogLevel.Info
})
fm.liveswitch.Log.registerProvider(provider);
```
[![npm package](https://github.com/liveswitch/liveswitch-datadog/actions/workflows/publish-to-npm.yaml/badge.svg)](https://github.com/liveswitch/liveswitch-datadog/actions/workflows/publish-to-npm.yaml)
