import mig2020 from '@/assets/data/2020.json';

export const dataTest = () => {
  for (const row of mig2020) {
    console.log(`output->row['现住地']`, row['现住地']);
  }
};
