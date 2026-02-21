# BrightHR Tech Task - Document Viewer

This is a React & TypeScript project built with Vite that dynamically displays documents in a table. It allows sorting and filtering of the documents, as well as viewing the contents of folders within the list.

## Tech stack

- Vite - Build tool and dev server
- React & TypeScript - Component based structure with strict typing rules
- Vitest & React Testing Library - used for testing

## The solution

The task was to create a single page application that allows the user to view a list of documents uploaded. The following three features were also included as options to pick two from:

- sort based on name / date.
- filter based on file types.
- expand folders to view contents.
  The data provided to be used as mock data was varied enough to carry out any/all of the three additional features, although further expansion could be done for example nested folders, however this was out of scope of the task.

## Design decisions

In this development, I have made an effort to keep the app as flexible as posssible, so it could be easily expanded in the future with minimal changes. Examples of where I have done this are:

- Generating the filtering list based on all unique file types in the data. If a new file type is added, the app will automatically account for this and add it to the filter list, meaning no additional changes to the code is required.
- Sorting based on table headers. If a new table header is added, the sortArrayOnField util function already accounts for additional keys added to the file system so the only additional logic required for this change is on the main page.

## Testing

Vitest test files have been written for all functions of the app. This includes a test file for the sorting util function, and a test file for all features of the main app page.

## How to install

```bash
npm install
```

## How to run

```bash
npm run dev
```

## Additional features

Further developments of this application could include:

- Searching by file name.
- Handling nested folders.
- Adding icons to allow users to recognise different file types at a glance.
- Additional themes eg. day/night mode.
