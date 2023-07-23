# PlaywrightTest

## Inside that directory, you can run several commands:

### * Before runing the test execute the following command to select the environment (prod, local, test or stg)
$env:ENV="prod"

### * Run all the tests
npx playwright test

### * Run a single test file
npx playwright test tests/MytheresaTests

### * Run a set of test files
npx playwright test tests/MytheresaTests tests/URLTests tests/PullRequests

### * Test case #3
Save the information in the file PR.csv in the root