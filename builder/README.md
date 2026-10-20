# AnthonyEMS Builder

Hosted at: https://fourban.github.io/AnthonyEMS/builder/

## Features

- Loads the existing public `fourban/AnthonyEMS` project.
- Visually edits test metadata and questions.
- Supports `single`, `multi`, `selects` and `image` question types.
- Creates, duplicates, reorders and deletes tests/questions.
- Creates, edits and deletes additional learning materials with title, category, description, text, optional image and HTTPS link.
- Adds created materials to the site's **Обучающие материалы** section when the ZIP is exported.
- Validates tests and material fields before ZIP export.
- Imports the current site ZIP and exports a full website ZIP.
- Drafts can be downloaded as JSON and imported on another device.
- Does not commit or publish changes to GitHub.

## Learning materials

Materials created in the builder are added as new cards and pages. Existing built-in materials and the site's architecture are preserved; this version does not yet edit the original hard-coded material pages directly.

For image fields, use a path that already exists in the project (for example `assets/example.webp`) or a direct HTTPS image URL. Text is entered as plain text; blank lines create separate paragraphs.

## Important

This is a public static editor. It has no GitHub write token and cannot update the repository directly. Anyone who can open it can download their own edited ZIP, but cannot publish it on your behalf.

## Publish manually

1. Open the builder and wait until the project status says it is loaded.
2. Edit tests and/or learning materials, then click **Собрать ZIP**.
3. Extract the ZIP and test the site before publishing.
4. Upload the files *inside* the ZIP to the root of a test copy of the repository first.
5. When verified, upload to `fourban/AnthonyEMS` as usual.

The builder folder itself is not included in the exported site ZIP.
