import getBestStation from './getBestStation';

describe('getBestStation', () => {
  it('should get the right station for [0, 0]', () => {
    expect(getBestStation([0, 0]).text).toEqual(
      'Best link station for point 0,0 is 0,0 with power 100',
    );
  });
  it('should get the right station for [100, 100]', () => {
    expect(getBestStation([100, 100]).text).toEqual(
      'No link station within reach for point 100,100',
    );
  });
  it('should get the right station for [15, 10]', () => {
    expect(getBestStation([15, 10]).text).toEqual(
      'Best link station for point 15,10 is 10,0 with power 0.67',
    );
  });
  it('should get the right station for [18, 18]', () => {
    expect(getBestStation([18, 18]).text).toEqual(
      'Best link station for point 18,18 is 20,20 with power 4.72',
    );
  });
});
