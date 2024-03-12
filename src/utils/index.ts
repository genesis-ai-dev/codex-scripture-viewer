import * as vscode from "vscode";

export const getWorkSpaceFolder = (): string | undefined => {
  /**
   * Generic function to get the workspace folder
   * NOTE: this util assumes we want to return only the first workspace folder
   */
  const workspaceFolder = vscode.workspace.workspaceFolders
    ? vscode.workspace.workspaceFolders[0].uri.fsPath
    : null;
  if (!workspaceFolder) {
    vscode.window.showErrorMessage("No workspace found");
    return;
  }
  return workspaceFolder;
};
