let numbersArray = [];

function getNumber() {
  // Lấy giá trị từ ô nhập liệu
  const inputElement = document.getElementById("inputNum");
  const inputValue = inputElement.value;

  // Tách các số từ chuỗi nhập vào bằng dấu phẩy và chuyển đổi thành số thập phân
  const numbers = inputValue
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));

  if (numbers.length > 0) {
    // Thêm các số vào mảng
    numbersArray.push(...numbers);

    // Cập nhật nội dung của txtArray để hiển thị các số trong mảng
    document.getElementById("txtArray").textContent = numbersArray.join(", ");

    // Xóa giá trị của ô nhập liệu
    inputElement.value = "";
  } else {
    alert("Vui lòng nhập ít nhất một số thập phân hợp lệ!");
  }
}
// Tính Tổng Số Dương
function sumPositive() {
    let positiveSum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] > 0) {
        positiveSum += numbersArray[i];
      }
    }
    document.getElementById(
      "txtSum"
    ).textContent = `Tổng số dương: ${positiveSum}`;
}
function countPositive() {
  const positiveCount = 0;
  for(let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] > 0){
        positiveCount++;
    }
  }
  document.getElementById(
    "txtCount"
  ).textContent = `Số lượng số dương: ${positiveCount}`;
}
function findMin(){
    if (numbersArray.length > 0) {
      const minNumber = numbersArray[0];
      for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] < minNumber) {
            minNumber = numbersArray[i];
        }
      }
      document.getElementById(
        "txtMin"
      ).textContent = `Số bé nhất: ${minNumber}`;
    } else {
      document.getElementById("txtMin").textContent = "Số bé nhất: Chưa có số";
    }
}
function  findMinPos(){
    if(numbersArray.length > 0){
        let minPos = null;
        for (let i = 0; i < numbersArray.length; i++) {
            if (numbersArray[i] > 0){
                if(minPos ===  null){
                    minPos = numbersArray[i]
                }else if(numbersArray[i] < minPos){
                    minPos = numbersArray[i];
                }
                
            }
        }
        if (minPos !== null){
            document.getElementById(
              "txtMinPos"
            ).textContent = `Số dương bé nhất: ${minPos}`;
        }else{
            document.getElementById(
              "txtMinPos"
            ).textContent = `Không có số dương nào trong mảng`;
        }
    }else{
        document.getElementById(
          "txtMinPos"
        ).textContent = `Mảng rỗng`;
    }
}
function findEven() {
    if(numbersArray.length > 0){
        let lastEven = null;
        for (let i = 0; i < numbersArray.length; i++){
            if (numbersArray[i] % 2 === 0){
                lastEven = numbersArray[i];
            }
        }
        if (lastEven !== null){
            document.getElementById("txtEven").textContent = `Số chẵn cuối cùng: ${lastEven}`;
        }else{
            document.getElementById("txtEven").textContent = `Mảng không có số chẵn`;
        }
    }else{
        document.getElementById('txtEven').textContent = `Mảng rỗng`;
    }
}
function changePosition() {
    if (numbersArray.length > 0){
        let index1 = parseInt(document.getElementById("inputIndex1").value.trim());
        let index2 = parseInt(
          document.getElementById("inputIndex2").value.trim()
        );

        if (
          isNaN(index1) ||
          isNaN(index2) ||
          index1 < 0 ||
          index2 < 0 ||
          index1 >= numbersArray.length ||
          index2 >= numbersArray.length
        ) {
          document.getElementById("txtChangePos").textContent = `Vui lòng nhập vị trí lớn hơn 0 và bé hơn chiều dài mảng`;
          return;
        }else{
            let temp = numbersArray[index1];
            numbersArray[index1] = numbersArray[index2];
            numbersArray[index2] = temp;
            document.getElementById("txtChangePos").textContent = `Mảng sau khi đổi: ` + numbersArray.join(', ');
        }
    }else{
        document.getElementById("txtChangePos").textContent = `Mảng rỗng`;
    }
}


// Hàm sắp xếp mảng numbersArray
function sortIncrease() {
  if(numbersArray.length > 0){
    for (let i = 0; i < numbersArray.length - 1; i++) {
      for (let j = i + 1; j < numbersArray.length; j++) {
        if (numbersArray[i] > numbersArray[j]) {
          let temp = numbersArray[i];
          numbersArray[i] = numbersArray[j];
          numbersArray[j] = temp;
        }
      }
    }
    document.getElementById("txtIncrease").textContent =
      `Mảng đã được sắp xếp: ` + numbersArray.join(", ");
  }else{
    document.getElementById("txtIncrease").textContent = `Mảng rỗng`;
  } 
}

function findPrime() {
  // Hàm kiểm tra một số có phải là số nguyên tố hay không
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // Tìm số nguyên tố đầu tiên trong mảng numbersArray
  for (const num of numbersArray) {
    if (Number.isInteger(num) && isPrime(num)) {
      // Cập nhật nội dung của txtPrime để hiển thị số nguyên tố đầu tiên
      document.getElementById(
        "txtPrime"
      ).textContent = `Số nguyên tố đầu tiên: ${num}`;
      return; // Dừng vòng lặp khi tìm thấy số nguyên tố đầu tiên
    }
  }

  // Nếu không có số nguyên tố nào
  document.getElementById("txtPrime").textContent =
    "Không có số nguyên tố nào trong mảng.";
}



function findInt() {
  // Đếm số lượng số nguyên dương và số nguyên âm
  let positiveCountInt = 0;
  let negativeCountInt = 0;

  for (const num of numbersArray) {
    if (Number.isInteger(num)) {
      // Kiểm tra xem num có phải là số nguyên không
      if (num > 0) {
        positiveCountInt++;
      } else if (num < 0) {
        negativeCountInt++;
      }
    }
  }

  // Cập nhật nội dung của txtInt để hiển thị số lượng số nguyên dương và số nguyên âm
  document.getElementById(
    "txtInt"
  ).textContent = `Số nguyên dương: ${positiveCountInt}, Số nguyên âm: ${negativeCountInt}`;
}

function compareNum() {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] > 0){
            positive++;
        }else if(numbersArray[i] < 0){
            negative++;
        }
    }
    let result;
    if (positive > negative) {
      result = `Số lượng số dương nhiều hơn số lương số âm: Số dương: ${positive} > Số âm: ${negative}`;
    } else if (positiveCount < negativeCount) {
      result = `Số lượng số âm nhiều hơn số lượng số dương: Số âm: ${negativeCount} > Số dương: ${positiveCount}`;
    } else {
      result = `Số lượng số dương và số âm bằng nhau: Số dương: ${positiveCount} = Số âm: ${negativeCount}`;
    }
    document.getElementById("txtCompare").textContent = result;
}
