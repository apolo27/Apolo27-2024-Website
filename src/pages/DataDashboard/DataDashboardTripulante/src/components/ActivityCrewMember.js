import MeditionsDetails from "./Merge Node";
import AcitivityGrowth from "./AcitivityGrowth";
import FrameComponent from "./FrameComponent";
import styles from "./ActivityCrewMember.module.css";
import { CContainer, CRow, CCol, CWidgetStatsF, CWidgetStatsA,
  CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle
  } from '@coreui/react'

const AcitivityCrewMember = () => {
  return (
    // <CContainer style={{}}>
    //   <CRow>
    //     <CCol xl={8}>
    //       <CRow>
    //       <MeditionsDetails />
    //       </CRow>
    //       <CRow>
    //       <AcitivityGrowth />
    //       </CRow>
    //     </CCol>
    //     <CCol xl={4}>
    //       <FrameComponent />
    //     </CCol>
    //   </CRow>
    // </CContainer>
    <div className={styles.searchTree}>
      <div className={styles.sortingNode}>
        <MeditionsDetails />
        <AcitivityGrowth />
      </div>
      <FrameComponent />
    </div>
  );
};

export default AcitivityCrewMember;
