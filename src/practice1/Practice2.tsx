export const Practice2 = () => {
  const clacTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    alert(clacTotalFee(1000));
  };
  return (
    <div>
      <p>練習：返却地の型指定</p>
      <button onClick={onClickPractice}>練習2</button>
    </div>
  );
};
