export const Practice4 = () => {
  /* tsconfig.jsonのstrictがtrueの場合、暗黙的な型指定はエラーとなる */
  const clacTotalFee = (num: any) => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = clacTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習4</button>
    </div>
  );
};
