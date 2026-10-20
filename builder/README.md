# AnthonyEMS Builder

Hosted at: https://fourban.github.io/AnthonyEMS/builder/

## Current version

- Loads the existing public `fourban/AnthonyEMS` project.
- Visually edits test metadata and questions.
- Supports `single`, `multi`, `selects` and `image` question types.
- Creates, duplicates, reorders and deletes tests/questions.
- Validates question data before ZIP export.
- Imports the current site ZIP and exports a full website ZIP.
- Drafts can be downloaded as JSON and imported on another device.
- Does not commit or publish changes to GitHub.

## Important

The learning-materials editor is not implemented yet. The current tab is a roadmap only; existing learning materials are preserved in the exported site without changes.

This is a public static editor. It has no GitHub write token and cannot update the repository directly. Anyone who can open it can download their own edited ZIP, but cannot publish it on your behalf.

## Publish manually

1. Open the builder and wait until the project status says it is loaded.
2. Edit tests and click **Собрать ZIP**.
3. Extract the ZIP and test the site before publishing.
4. Upload the files *inside* the ZIP to the root of a test copy of the repository first.
5. When verified, upload to `fourban/AnthonyEMS` as usual.

The builder folder itself is not included in the exported site ZIP.
