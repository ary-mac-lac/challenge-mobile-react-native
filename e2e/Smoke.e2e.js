describe('E2E', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show welcome screen', async () => {
    await expect(element(by.id('e2e-smoke-test'))).toBeVisible()
  })
})
