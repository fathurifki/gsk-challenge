export const data = {
    "version": "1.0.0",
    "modules": {
      "trial-module": "modules/trial"
    },
    "gateways": {
      "gateway-001": {
        "module": "trial-module",
        "className": "com.example.module.gateway.GatewayOne",
        "configs": {
          "host": "0.0.0.0",
          "port": 8082,
          "forwardTo": "fireeye-websocket-gateway"
        }
      },
      "gateway-002": {
        "module": "trial-module",
        "className": "com.example.module.gateway.GatewayTwo",
        "configs": {
          "host": "0.0.0.0",
          "port": 8083
        }
      }
    },
    "middlewares": {
      "middleware-001": {
        "module": "trial-module",
        "className": "com.example.module.gateway.MiddlewareOne",
        "configs": {
          "folder": "logs"
        }
      },
      "middleware-002": {
        "module": "trial-module",
        "className": "com.example.module.gateway.MiddlewareTwo",
        "configs": {
          "bla": "bla-bla"
        }
      },
      "middleware-003": {
        "module": "trial-module",
        "className": "com.example.module.gateway.MiddlewareThree",
        "configs": {
          "pgIp": "example.com",
          "pgPort": 80,
          "cronExpression": "* * * * *",
          "couchAddress": "http://example.com",
          "couchUsername": "trialusername",
          "couchPassword": "trialpassword"
        }
      }
    },
    "routes": [
      {
        "source": "gateway-001",
        "destination": "gateway-002",
        "middlewares": [
          "middleware-001",
          "middleware-002",
          // "middleware-003"
        ]
      },
      {
        "source": "gateway-002",
        "destination": "gateway-003",
        "middlewares": [
          "middleware-001",
          "middleware-002",
          "middleware-003"
        ]
      },
      {
        "source": "gateway-004",
        "destination": "gateway-005",
        "middlewares": [
          "middleware-001",
          "middleware-002",
          "middleware-003",
          "middleware-004",
        ]
      }
    ]
  }
  