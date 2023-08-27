const packageService = require("../../services/package.service")

const packageRepository = () => {

  const packages = [
    {
      "Id": 1,
      "TrackingNo": "TH-129248O2",
      "OwnerId": "Frank",
      "RoomId": "5/191",
      "PhoneNumber": "084-535-4871",
      "isRecieved": 0,
      "CreatedAt": "2023-08-26T07:39:09.000Z"
    },
    {
      "Id": 2,
      "TrackingNo": "TH-15393598",
      "OwnerId": "Cream",
      "RoomId": "5/191",
      "PhoneNumber": "084-535-4871",
      "isRecieved": 0,
      "CreatedAt": "2023-08-26T07:39:09.000Z"
    }
  ]

  const getPackages = async () => {
    return new Promise((resolve, reject) => resolve(packages))
  }

  return {
    packages,
    getPackages
  }
}

describe('packageService: getPackages', () => {
  test('should return list of packages', () => {

    //Arrange
    const packages = [
      {
        "Id": 1,
        "TrackingNo": "TH-129248O2",
        "OwnerId": "Frank",
        "RoomId": "5/191",
        "PhoneNumber": "084-535-4871",
        "isRecieved": 0,
        "CreatedAt": "2023-08-26T07:39:09.000Z"
      },
      {
        "Id": 2,
        "TrackingNo": "TH-15393598",
        "OwnerId": "Cream",
        "RoomId": "5/191",
        "PhoneNumber": "084-535-4871",
        "isRecieved": 0,
        "CreatedAt": "2023-08-26T07:39:09.000Z"
      }
    ]

    const mockRepo = packageRepository()

    //Act
    const service = packageService(mockRepo);
    service.getPackages().then(data => {
      //Assert
      expect(data).toEqual([])
    });
  });
});
