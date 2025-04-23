// YOUR CODE BELOW
const searchParty = (name, world) => {
  for (let location in world) {
    const worldValues = world[location];
    if (typeof worldValues === "string" && worldValues === name) {
      return [location];
    } else if (Array.isArray(worldValues)) {
      if (worldValues.includes(name)) {
        return [location];
      }
    } else if (
      typeof worldValues === "object" &&
      worldValues !== null && //since null is a special "object-like" value, we need to explicitly check for null to avoid it.
      !Array.isArray(worldValues)
    ) {
      const subLocation = searchParty(name, worldValues);
      if (subLocation) {
        return [location, ...subLocation];
      }
    }
  }

  return null;
};

// My method doesn't work
const searchPartyDemo = (name, world) => {
  const googleMap = [];
  for (let location in world) {
    const worldValues = world[location];
    if (typeof worldValues === "string" && worldValues === name) {
      googleMap.push(location);
    } else if (Array.isArray(worldValues)) {
      if (worldValues.includes(name)) {
        googleMap.push(location);
      }
    } else {
      const googleMap2 = searchParty(name, worldValues);
      if (googleMap2) {
        googleMap.push(...googleMap2);
      }
    }
  }

  return googleMap;
};
