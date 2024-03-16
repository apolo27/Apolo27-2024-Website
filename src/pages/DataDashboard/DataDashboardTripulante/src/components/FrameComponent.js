import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.dataProcessor}>
      <div className={styles.dataProcessorChild} />
      <div className={styles.dataAggregator}>
        <div className={styles.textProcessor}>
          <div className={styles.imageAnalyzer}>
            <h1 className={styles.bmiCalculator}>BMI Calculator</h1>
          </div>
          <div className={styles.valueCalculator}>
            <div className={styles.vantroi}>VANTROI</div>
            <div className={styles.splitter}>
              <img className={styles.mergerIcon} alt="" src="/frame-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.conditionNode}>
        <div className={styles.iterationNode}>
          <div className={styles.functionNode}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.outputNode}>
                <div className={styles.altura}>Altura</div>
              </div>
              <div className={styles.delayNode} />
              <div className={styles.returnNode}>
                <div className={styles.parallelNode}>
                  <div className={styles.groupNode}>
                    <div className={styles.deleteNode} />
                    <div className={styles.createNode} />
                    <div className={styles.updateNode} />
                    <div className={styles.constantNode} />
                    <div className={styles.variableNode} />
                    <div className={styles.arrayNode} />
                    <div className={styles.dictionaryNode} />
                    <div className={styles.mapNode} />
                  </div>
                </div>
                <div className={styles.cm}>170 cm</div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.pesoWrapper}>
                <div className={styles.peso}>Peso</div>
              </div>
              <div className={styles.sequenceNodeParent}>
                <div className={styles.sequenceNode} />
                <div className={styles.randomNode}>
                  <div className={styles.parallelNode1}>
                    <div className={styles.groupNode1}>
                      <div className={styles.ifElseNode} />
                      <div className={styles.whileLoopNode} />
                      <div className={styles.forLoopNode} />
                      <div className={styles.nestedLoopNode} />
                      <div className={styles.switchNode} />
                      <div className={styles.caseNode} />
                      <div className={styles.defaultNode} />
                      <div className={styles.breakNode} />
                    </div>
                  </div>
                  <div className={styles.kg}>72 kg</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.stackNode}>
              <div className={styles.indiceDeMasa}>
                Indice de Masa Corporal (BMI)
              </div>
            </div>
            <div className={styles.heapNode}>
              <div className={styles.minHeapNode}>24.9</div>
              <button className={styles.maxHeapNode}>
                <b className={styles.saludable}>SALUDABLE</b>
              </button>
            </div>
            <div className={styles.bTreeNode}>
              <div className={styles.aVLTreeNode}>
                <div className={styles.redBlackTreeNode} />
              </div>
              <div className={styles.hashTableNode} />
            </div>
            <div className={styles.listCreator}>
              <b className={styles.textProcessor1}>15</b>
              <b className={styles.textProcessor2}>18.5</b>
              <b className={styles.textProcessor3}>25</b>
              <div className={styles.valueAggregator}>
                <b className={styles.filterSorter}>30</b>
              </div>
              <b className={styles.textProcessor4}>40</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataTransformer}>
        <div className={styles.linkConnector}>
          <FrameComponent1
            chestIn="Chest (in)"
            shapeAssembler="44.5"
            colorCombiner="/frame-2.svg"
          />
          <FrameComponent1
            chestIn="Waist (in)"
            shapeAssembler="34"
            colorCombiner="/frame-3.svg"
            propPadding="var(--padding-5xl) var(--padding-12xl)"
            propPadding1="0px var(--padding-2xs) 0px var(--padding-3xs)"
          />
          <FrameComponent1
            chestIn="Hip (in)"
            shapeAssembler="42.5"
            colorCombiner="/frame-3.svg"
            propPadding="var(--padding-5xl) var(--padding-13xl)"
            propPadding1="unset"
          />
        </div>
        <img
          className={styles.fill283Icon}
          loading="lazy"
          alt=""
          src="/fill283.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
