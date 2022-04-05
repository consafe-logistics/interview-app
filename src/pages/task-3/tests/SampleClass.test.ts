import SampleClass from "./SampleClass";

describe('SampleClass', () => {
  it('should throw an error after failing to load the data', async () => {
    // Setup
    const sampleClass = new SampleClass();

    // Act & Assert
    expect(await sampleClass.throwAsyncError()).toThrowError();
  });

  it('should return the secret value', () => {
    // Setup
    const sampleClass = new SampleClass();

    // Act
    const secretValue = sampleClass.getSecretObject();

    // Act & Assert
    expect(secretValue).toBe(expect.objectContaining(42));
  });

}); 