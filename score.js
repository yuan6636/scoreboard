let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
];

const dataPanel = document.querySelector("#data-panel");

// write your code here
// 有設定條件讓姓名和分數分開

function displayPlayerList(players) {
  let playerContent = "";

  // 應用forEach迴圈加上 template literal 附加 td 標籤，記得icon要放在 <span>${player[key]}</span> 後面
  players.forEach((player) => {
    playerContent += "<tr>";
    for (let key in player) {
      if (key === "name") {
        playerContent += `<td>${player[key]}</td>`;
      } else {
        playerContent += `
          <td>
            <span>${player[key]}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
          `;
      }
    }
  });
  playerContent += "</tr>";
  dataPanel.innerHTML = playerContent;
}

displayPlayerList(players);

// 設定事件監聽器
dataPanel.addEventListener("click", function (event) {
  const target = event.target; // 如果變數宣告後不會再重新賦值，建議使用 const 會比較好
  const scoreContainer = target.parentElement.children[0];

  //  scoreContainer取到的值是字串，需再轉換成數值，才可計算
  let score = Number(scoreContainer.textContent);

  //  附加判斷條件(點擊位置的 class 要包含 icon 的 class name)，確認點到 icon 才可進行數值加減
  //  參考其他人的答案，發現也可以使用Math.max()方法可再省略一個if判斷式
  if (target.classList.contains("fa-plus-circle")) {
    score += 1;
  } else if (target.classList.contains("fa-minus-circle")) {
    score = Math.max(score - 1, 0);
  }

  // 將運算後的 score 值，放回 scoreContainer (<span>) 內部
  scoreContainer.textContent = score;
});
