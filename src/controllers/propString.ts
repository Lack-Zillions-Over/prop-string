class PropString {
  /**
   * @description Get value of property in object by string
   */
  public execute<T, R>(text: string, object: T, update?: R): R {
    if (text === '')
      return null;

    if (typeof text !== 'string')
      return null;

    let value, error;

    for (const [index, key] of text.split('.').entries()) {
      if (index === 0) {
        value = object[key];
      } else {
        if (!value[key]) {
          error = `Prop "${key}" not found in object."`;
          break;
        }

        value = value[key];
      }
    }

    if (error) return null;

    if (update) {
      value = update;
    }

    return update ? update : value;
  }
}

export default PropString;
