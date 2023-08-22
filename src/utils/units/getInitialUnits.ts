import { START_UNITS_BY_TRIBE, TTribe } from "../../constants/tribe";
import { Units } from "../../constants/unit";
import { TUnitInstance } from "../../types/unit";

export const getInitialUnits = (tribes: TTribe[]) => {
  return tribes.reduce<{
    allUnits: Record<string, TUnitInstance>;
    unitsByTribe: TUnitInstance[][];
  }>(
    (acc, tribe) => {
      const tribeUnitTypes = START_UNITS_BY_TRIBE[tribe];

      const tribeUnits = tribeUnitTypes.map((unitType) => {
        const unit = {
          id: crypto.randomUUID(),
          tribe,
          ...Units[unitType],
        };

        acc.allUnits[unit.id] = unit;

        return unit;
      });

      acc.unitsByTribe.push(tribeUnits);

      return acc;
    },
    { allUnits: {}, unitsByTribe: [] },
  );
};