import fecth from 'node-fetch';

fetch('https://api.thedogapi.com/v1/breeds')
  .then(response => response.json())
  .then(async data => {
    // //[1] 전체 데이터
    console.log(data);
    // //[2] 전체 데이터에서 키(name)에 해당하는 값 출력
    const name = data.map(item => item.name);
    // console.log(name);
    // // [3] 전체 데이터에서 키(id와 name)에 해당하는 값 출력
    const idAndName = data.map(item => ({id: item.id, name: item.name}));
    // console.log(idAndName);

    // [4] 이미지 url 받아오기 ,,,, 한번에 한개씩 리턴
    // let images = [];
    // for (const item of data){
    //   const result = {
    //     id: item.id,
    //     name: item.name,
    //     image_url: await getImageFromImageIed(item.reference_image_id)
    //   }
    //   console.log(result);
    //   images.push(result);
    // }
    // [5] 이미지 id로 이미지 ur 받아오기 ,,, 데이터 한번에 리턴
    const promiseImage = data.map(item => new Promise((resolve, reject) => { 
      getImageFromImageId(item.reference_image_id)
        .then((imageUrl) => {
          resolve({
            id: item.id,     // 현재 강아지 종의 ID를 결과 객체에 추가합니다.
            name: item.name, // 현재 강아지 종의 이름을 결과 객체에 추가합니다.
            // 강아지 종의 이미지 URL을 가져오는 getImageFromImageId 함수를 호출하고, 해당 URL을 결과 객체에 추가합니다.
            // getImageFromImageId 함수는 강아지 종의 reference_image_id를 사용하여 이미지 정보를 가져옵니다.
            image_Url: imageUrl
          })
        })
    }))
    return Promise.all(promiseImage);
  })
  .catch(error => console.log(error))

async function getImageFromImageIed(referenceImageId) {
  try {
    const responseImage = await fecth(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
    const imageData = await responseImage.json();
    // console.log(imageData);
    return imageData.url;
  } catch(error) {
    console.error(error);
  }
}

