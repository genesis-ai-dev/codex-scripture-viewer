import * as vscode from "vscode";
import { registerScriptureViewerProvider } from "./providers/scriptureView/ScriptureViewerPanel";

export async function activate(context: vscode.ExtensionContext) {
  registerScriptureViewerProvider(context);
  context.subscriptions.push(
    vscode.commands.registerCommand(
      `codex-editor-extension.viewScriptureDisplay`,
      async () => {
        await vscode.commands.executeCommand(
          "scriptureViewer.showScriptureViewer"
        );
      }
    )
  );
}
