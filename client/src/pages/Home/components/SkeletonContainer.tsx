import Skeleton from 'react-loading-skeleton';
import { GridItem } from '../../../components/Card';
import { Grid } from '../../../styled/Grid';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonContainer = ({ size = 14 }: { size?: number }) => {
  const skeletItems = Array.from({ length: size });
  return (
    <Grid type="flex">
      {skeletItems.map((_, i) => (
        <GridItem key={i}>
          <Skeleton style={{ paddingBottom: 'calc(2 / 2.2 * 100%)', lineHeight: 2 }} />
        </GridItem>
      ))}
    </Grid>
  );
};
