export async function wait(milliseconds: number) {
  console.log("Simulate wait")
  await new Promise((resolve) => setTimeout(resolve, milliseconds))
  console.log("Wait is over now")
}
