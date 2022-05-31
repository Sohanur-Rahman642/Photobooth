import { UNSPLASH_ACCESS_KEY } from "../../constants/Constant";
import { getPhotoes, getPhotoesTest } from "../../services/ApiInterface";



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
            expect(onResponse.mock.calls[0][0].length).toBeGreaterThan(0);
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
            expect(onResponse.mock.calls[0][0][0]).toEqual({"id": 1});
            expect((Object.keys(onResponse.mock.calls[0][0][0])).length).toBeGreaterThan(0)
    });
  });


  test('returns an empty array', async () => {
    fetch.mockResponseOnce(JSON.stringify([]));

    const onResponse = jest.fn();
    const onError = jest.fn();

    return getPhotoes(expect.anything(), expect.anything())
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(onResponse.mock.calls[0][0]).toEqual([]);
    });
  });

  test('matches with a mock response model', async () => {
    let mockResponse = 
    [{
        id: 1,
        urls:
        {
         regular: "https://images.unsplash.com/photo-1638913662415-8c5f79b20656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjkxOTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1Mzk3ODA3Mg&ixlib=rb-1.2.1&q=80&w=1080"
        },
        links: 
        {
         download: "https://unsplash.com/photos/thjMbU79RFU/download?ixid=MnwzMjkxOTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1Mzk3ODA3Mg"
        }
    }]

    fetch.mockResolvedValue(new Response(JSON.stringify(mockResponse)));


    return getPhotoes(expect.anything(), expect.anything())
        .then(data => {
            expect(data.length).toBeGreaterThan(0);
            expect(data).toEqual(mockResponse)
        })
  });



  test('throw errors if empty array', async () => {
    fetch.mockResponseOnce(JSON.stringify([]));

    const onResponse = jest.fn();
    const onError = jest.fn();

    return getPhotoesTest(expect.anything(), expect.anything())
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).not.toHaveBeenCalled();
            expect(onError).toHaveBeenCalled();
    });
  });



