import { PropString } from "../controllers/index";

const setupSut = () => {
  const sut = new PropString();
  return { sut };
};

describe('PropString Suite Tests', () => {
  test('should get value property', async () => {
    const { sut } = setupSut();
    expect(sut.execute('test.name', {
      test: {
        name: 'John Doe',
      },
    })).toBe('John Doe');
  });

  test('should not get value property', async () => {
    const { sut } = setupSut();
    expect(sut.execute('test.name', {
      test: 'John Doe',
    })).toBe(null);
    expect(sut.execute('', {})).toBe(null);
    expect(sut.execute(undefined, {})).toBe(null);
  });

  test('should update value property', async () => {
    const { sut } = setupSut();
    expect(sut.execute('test.name', {
      test: {
        name: 'John Doe',
      },
    }, 'GuilhermeSantos001')).toBe('GuilhermeSantos001');
  });
});
