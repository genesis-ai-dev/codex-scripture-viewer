import * as vscode from "vscode";

interface ScriptureContent extends vscode.NotebookData {
  metadata: {
    data?: {
      chapter: string;
    };
    type?: "chapter-heading";
  };
}

type ScripturePostMessages =
  | { command: "sendScriptureData"; data: ScriptureContent }
  | { command: "fetchScriptureData" };

interface VerseRefGlobalState {
  verseRef: string;
  uri: string;
}

interface SelectedTextDataWithContext {
  selection: string;
  completeLineContent: string | null;
  vrefAtStartOfLine: string | null;
  selectedText: string | null;
}

type NotebookCellKind = vscode.NotebookCellKind;
