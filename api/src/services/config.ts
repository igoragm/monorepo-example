class ConfigService {
    private static getValue(key: string) {
        return process.env[key];
    }

    private static gS(key: string, defaultValue = ""): string {
        const value = ConfigService.getValue(key);

        if (value !== undefined) {
            return value.trim();
        }
        return defaultValue.trim();
    }

    private envData = {
        node: {
            env: ConfigService.gS("NODE_ENV"),
            isDev: ConfigService.gS("NODE_ENV") !== "production",
            isProd: ConfigService.gS("NODE_ENV") === "production",
            isTesting: ConfigService.gS("NODE_ENV") === "testing"
        },
        api: {
            corsCrossOrigins: ConfigService.gS("API_CORS_CROSSORIGINS").split(";"),
            basePath: ConfigService.gS("API_BASE_PATH", "/"),
            listenPort: Number(ConfigService.gS("API_LISTEN_PORT", 3030 + ""))
        },
        logging: {
            levelConsole: ConfigService.gS("LOGGING_LEVEL_CONSOLE", "debug")
        }
    };

    get logging() {
        return this.envData.logging;
    }

    get node() {
        return this.envData.node;
    }

    get api() {
        return this.envData.api;
    }
}
const configService = new ConfigService();

export default configService;
