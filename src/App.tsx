import { useTranslation } from "react-i18next";
import usePreventDefault from "./hooks/usePreventDefault";
import useWindowDimensions from "./hooks/useWindowDimensions";

const App = () => {
    const { t } = useTranslation();
    const dimensions = useWindowDimensions();

    usePreventDefault("contextmenu", (e) => !((e?.target as HTMLInputElement)?.type === "text"));
    usePreventDefault("keydown", (e) => e.ctrlKey && e.code === "KeyS");

    return (
        <div style={dimensions}>
            <p>{t("example")}</p>
        </div>
    );
};

export default App;
