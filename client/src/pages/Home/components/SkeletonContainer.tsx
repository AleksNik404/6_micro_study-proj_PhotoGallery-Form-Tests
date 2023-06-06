import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { GridItem } from '../../../components/Card';
import { Grid } from '../../../styled/Grid';
import { API_COUNT_PHOTOS } from '../../../utils/constants';

export const SkeletonContainer = ({ size = API_COUNT_PHOTOS }: { size?: number }) => {
  const skeletItems = Array.from({ length: size });
  return (
    <Grid type="flex">
      {skeletItems.map((_, i) => (
        <GridItem key={i}>
          <Skeleton style={{ paddingBottom: 'calc(1 / 1.2 * 100%)', lineHeight: 2 }} />
        </GridItem>
      ))}
    </Grid>
  );
};
