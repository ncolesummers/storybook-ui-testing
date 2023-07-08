# Visual Testing

Visual testing is the process of verifying the appearance of a component as you're building it, and again as you iterate to ship new features.

## Workflow

1. Isolate components. Use Storybook to focus on and test one component at a time.

2. Write out test cases. Each state is reproduced using props and mock data.

3. Manually verify the appearance of each test case.

4. Catch UI bugs automatically. Capture snapshots of each test case and use machine-based diffing to check for regressions.

### Isolate Components

It's much easier to pinpoint bugs by testing one component at a time and writing a test case for each of its states. The conventional approach is to build the component on the applicaiton page where it is first used. Which makes it hard to simulate and verify all these states. There's a better way.

Storybook is the industry-standard for building components in isolation. It's used by most major software companies. It is packaged as a small standalone tool that lives alongside your app, giving you:

- A sandbox to render each component in isolation.
- Visualize all its states as stories.
- Document props and usage guidelines for each component.
- A directory of all your components to make discovery easier.

### Write Test Cases

In storybook, test cases are referred to as stories. A story captures a particular state of the component—the actual rendered state in the browser.

### Verify

Verification is you evaluating how the component looks in Storybook.
That is, does it match the design spec?

The usual development workflow is:

1. Edit the code
2. Get the component in the appropriate state
3. Evaluate its appearance

Repeat until you've verified all its states.

By writing a story for each state, you cut out that second step. You can go right from editing code to verifying all test cases. Thus, dramatically speeding up the whole process.

Writing out stories also surfaces scenarios that you wouldn't have considered had you developed it in a more ad-hoc way. For example, what happens if the user enters a really long task?
