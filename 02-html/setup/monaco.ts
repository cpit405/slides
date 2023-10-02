import { defineMonacoSetup } from '@slidev/types'
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup(async (monaco) => {
    monaco.editor.onDidCreateEditor(editor => {
        editor.updateOptions({
            fontFamily: "'Monaco, JetBrains Mono', Menlo, 'Courier New', monospace",
            lineNumbers: 'on',
            wordWrap: 'on',
            lightbulb: {
                enabled: true,
            },
            quickSuggestions: {
                other: true,
                comments: true,
                strings: true,
            },
            acceptSuggestionOnCommitCharacter: true,
            acceptSuggestionOnEnter: 'on',
            accessibilitySupport: 'on',
        });
        return {
            theme: {
                dark: "vs-dark",
                light: "vs",
            },
        };
    });
});

