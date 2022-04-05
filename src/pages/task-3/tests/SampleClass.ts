export default class SampleClass {

  private mySecretObject = {
    id: 42,
    name: 'The Answer',
  };

  public async throwAsyncError(): Promise<void> {
    Promise.reject(new Error('Failed to load the data!'));
  }

  public getSecretObject(): unknown {
    return this.mySecretObject;
  }

}