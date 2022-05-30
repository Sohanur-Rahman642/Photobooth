import { getPhotoes } from "../../services/ApiInterface";



beforeEach(() => {
    fetch.resetMocks();
  });

  test('returns result if array', () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));

    const onResponse = jest.fn();
    const onError = jest.fn();

    return getPhotoes(expect.anything(), expect.anything())
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(fetch.mock.calls.length).toEqual(1);
            expect(onResponse.mock.calls[0][0]).toEqual([{ id: 1 }]);
    });


   

  });
  

  test('returns result if non-empty object', () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));

    const onResponse = jest.fn();
    const onError = jest.fn();

    return getPhotoes(expect.anything(), expect.anything())
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(onResponse.mock.calls[0][0][0]).toEqual({"id": 1});
    });
  });


  test('returns result if empty array', () => {
    fetch.mockResponseOnce(JSON.stringify([]));

    const onResponse = jest.fn();
    const onError = jest.fn();

    return getPhotoes(expect.anything(), expect.anything())
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).not.toHaveBeenCalled();
            expect(onError).toHaveBeenCalled();
    });
  });