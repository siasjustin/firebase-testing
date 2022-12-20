module.exports = {
    name: "firebase-testing",
    slug: "firebase-testing",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
    },
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: true,
        bundleIdentifier: "com.siasjustin.firebase-testing",
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#FFFFFF",
        },
    },
    web: {
        favicon: "./assets/favicon.png",
    },
    plugins: [
        [
            "expo-build-properties",
            {
                ios: {
                    useFrameworks: "static",
                },
            },
        ],
    ],
    extra: {
        VIMEO_TOKEN: process.env.VIMEO_TOKEN,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        DATABASE_URL: process.env.DATABASE_URL,
        PROJECT_ID: process.env.PROJECT_ID,
        APP_ID: process.env.APP_ID,
        MEASUREMENT_ID: process.env.MEASUREMENT_ID,
        ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
        ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
        REST_SERVER_PATH: process.env.REST_SERVER_PATH,
        eas: {
            projectId: "46055a68-24ee-4b7d-a877-300b2a163076",
        },
    },
};
