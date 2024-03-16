import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  chestIn,
  shapeAssembler,
  colorCombiner,
  propPadding,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.chestInParent} style={frameDivStyle}>
      <h2 className={styles.chestIn}>{chestIn}</h2>
      <div className={styles.shapeAssemblerParent} style={frameDiv1Style}>
        <div className={styles.shapeAssembler}>{shapeAssembler}</div>
        <img className={styles.colorCombinerIcon} alt="" src={colorCombiner} />
      </div>
    </div>
  );
};

export default FrameComponent1;
