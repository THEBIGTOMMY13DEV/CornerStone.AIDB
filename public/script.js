const GRADE_COURSES = {
  "9": ["algebra1", "biology", "world_hist", "english9"],
  "10": ["geometry", "chemistry", "us_hist", "english10"],
  "11": ["algebra2", "physics", "usgov", "english11"],
  "12": ["precalc", "ap_stats", "econ", "english12"]
};

const CURRICULUM = {
  algebra1: {
    label: "Algebra I",
    lost: [
      {title: "Integers & Absolute Value", sub: "Foundation", week: "Week 1", phase: "gap", tip: "Use a physical number line to visualize jumps. Remember: subtracting a negative is the same as adding a positive!"},
      {title: "The Distributive Property", sub: "Algebra Basics", week: "Week 1-2", phase: "gap", tip: "Think of the number outside as a 'delivery person' visiting every term inside the parentheses house."},
      {title: "Order of Operations (PEMDAS)", sub: "Refresher", week: "Week 2", phase: "gap", tip: "Multiplication/Division and Addition/Subtraction are 'equal'—always do them from left to right!"},
      {title: "Fractions and Decimals", sub: "Number Fluency", week: "Week 2-3", phase: "gap", tip: "You need a common denominator to add/subtract, but just multiply straight across for everything else."},
      {title: "Evaluating Expressions", sub: "Variable Basics", week: "Week 3", phase: "gap", tip: "Always put parentheses around the number you are 'plugging in' to avoid sign errors with negatives."},
      {title: "Solving One-Step Equations", sub: "Current Unit", week: "Week 4", phase: "next", tip: "Do the exact opposite operation to both sides to isolate the variable (e.g., if it's +5, you -5)."},
      {title: "Solving Two-Step Equations", sub: "Equations", week: "Week 4-5", phase: "next", tip: "Get rid of the 'straggler' (the addition/subtraction part) before you touch the coefficient."},
      {title: "Multi-Step Equations", sub: "Equations", week: "Week 5", phase: "next", tip: "Simplify each side completely by combining like terms BEFORE you start moving things across the equals sign."}
    ],
    gaps: [
      {title: "Multi-Step Equations", sub: "Algebra Basics", week: "Week 1", phase: "gap", tip: "Watch your signs! The #1 mistake is forgetting to distribute a negative to the second term in a parenthesis."},
      {title: "Distributing Negatives", sub: "Refresher", week: "Week 1-2", phase: "gap", tip: "A negative times a negative is a positive. Say it out loud every time you distribute a minus sign."},
      {title: "Combining Like Terms", sub: "Refresher", week: "Week 2", phase: "gap", tip: "Only terms with the exact same variables and exponents can be combined. Think of them as different fruit types."},
      {title: "Variables on Both Sides", sub: "Unit 2 Prep", week: "Week 3", phase: "next", tip: "Move the 'smaller' variable to the other side first to keep your coefficients positive and avoid mistakes."},
      {title: "Literal Equations", sub: "Skills", week: "Week 4", phase: "next", tip: "It's the same steps as regular equations, just with more letters. Don't let the extra variables scare you!"},
      {title: "Solving Absolute Value Eqs", sub: "Advanced", week: "Week 5", phase: "next", tip: "Remember: there are always TWO cases to solve for once the absolute value is isolated."}
    ],
    shaky: [
      {title: "Literal Equations", sub: "Review", week: "Week 1", phase: "gap", tip: "Focus on the variable you want to isolate. Treat every other letter like a regular number."},
      {title: "Percent Proportion", sub: "Application", week: "Week 1", phase: "gap", tip: "Always use: Part / Whole = % / 100. It works for almost every percent problem you'll encounter."},
      {title: "Rate and Unit Price", sub: "Ratios", week: "Week 1-2", phase: "gap", tip: "Divide the total cost by the quantity to find the price of exactly ONE item."},
      {title: "Inequalities on a Number Line", sub: "Current Unit", week: "Week 2", phase: "next", tip: "Open circle for < and >, closed circle for ≤ and ≥. Shade the side that makes the statement true."},
      {title: "Solving Multi-Step Inequalities", sub: "Inequalities", week: "Week 3", phase: "next", tip: "CRITICAL: If you multiply or divide by a negative number, you MUST flip the inequality sign!"},
      {title: "Compound Inequalities", sub: "Advanced", week: "Week 4", phase: "next", tip: "Think of 'AND' as the overlap and 'OR' as two separate paths going in opposite directions."}
    ],
    tip: { 
      lost: "Focus on 'Number Fluency' first. If you can't add or subtract negative numbers without a calculator, every other unit will feel impossible. Practice with a number line and drill basic integer operations for 10 minutes daily before touching your homework.", 
      gaps: "Equations are a balance scale. Whatever you do to the left, you MUST do to the right. If you're stuck on multi-step equations, go back and master one-step equations until they are second nature; you can't build a house on a shaky foundation.", 
      shaky: "You likely understand the 'How' but are making small 'Sign Errors'. Slow down and check your work by plugging your final answer back into the original equation. If the sides don't match, you made a small arithmetic slip—find it and learn the pattern of your mistakes." 
    }
  },
  geometry: {
    label: "Geometry",
    lost: [
      {title: "Segments & Midpoints", sub: "Unit 1", week: "Week 1", phase: "gap", tip: "The midpoint is just the average of the coordinates. Add them up and divide by two!"},
      {title: "The Distance Formula", sub: "Skill", week: "Week 1-2", phase: "gap", tip: "The distance formula is just the Pythagorean Theorem (a² + b² = c²) in disguise. Use it to find the hypotenuse."},
      {title: "Angle Addition Postulate", sub: "Foundation", week: "Week 2", phase: "gap", tip: "The 'Part + Part = Whole' logic applies to both segments and angles. Look for the shared vertex."},
      {title: "Naming Planes & Rays", sub: "Notation", week: "Week 2", phase: "gap", tip: "Order matters for Rays! Start at the endpoint and go through the other point (e.g., Ray AB starts at A)."},
      {title: "Linear Pairs & Vertical Angles", sub: "Angles", week: "Week 3", phase: "gap", tip: "Linear pairs add to 180°. Vertical angles are always exactly equal. Look for the 'X' shape."},
      {title: "Parallel Line Theorems", sub: "Current Unit", week: "Week 4", phase: "next", tip: "When lines are parallel, Alt. Interior and Corresponding angles are equal. Consecutive ones add to 180°."},
      {title: "Transversal Angle Problems", sub: "Application", week: "Week 5", phase: "next", tip: "Draw a 'Z' shape to find Alternate Interior angles—they are always congruent if the lines are parallel."},
      {title: "Proving Lines Parallel", sub: "Proofs", week: "Week 6", phase: "next", tip: "This is the reverse of the theorems: if the angles are equal, then the lines MUST be parallel."}
    ],
    gaps: [
      {title: "Transversals & Angles", sub: "Unit 2", week: "Week 1", phase: "gap", tip: "Identify the transversal first (the line crossing the other two). It's the 'bridge' between the angles."},
      {title: "Slope of Parallel Lines", sub: "Coordinate Review", week: "Week 1", phase: "gap", tip: "Parallel lines have the same slope. Perpendicular lines have 'opposite reciprocal' slopes (flip and change sign)."},
      {title: "Intro to Triangle Proofs", sub: "Unit 3 Prep", week: "Week 2", phase: "next", tip: "Proofs are just step-by-step logic. Use your 'Givens' as the starting point for every argument."},
      {title: "Reflexive & Substitution Props", sub: "Proof Skills", week: "Week 3", phase: "next", tip: "The Reflexive Property (A = A) is used almost every time two triangles share a side."},
      {title: "Isosceles Triangle Theorems", sub: "Triangles", week: "Week 4", phase: "next", tip: "If two sides of a triangle are equal, the angles opposite those sides are also equal. Look for the symmetry!"},
      {title: "Hinge Theorem", sub: "Inequalities", week: "Week 5", phase: "next", tip: "Think of a door hinge: the wider the angle, the longer the side opposite that angle becomes."}
    ],
    shaky: [
      {title: "Conditional Statements", sub: "Logic Review", week: "Week 1", phase: "gap", tip: "If-Then. The 'If' is the hypothesis, the 'Then' is the conclusion. Focus on the logical flow."},
      {title: "Converse, Inverse, Contrapos.", sub: "Logic", week: "Week 1-2", phase: "gap", tip: "The Contrapositive (flip and negate) has the same truth value as the original statement. Use that to check your logic!"},
      {title: "Law of Syllogism", sub: "Logic", week: "Week 2", phase: "gap", tip: "It's like a chain: If A -> B and B -> C, then A -> C. Look for the middle link (B)."},
      {title: "SSS, SAS, ASA Postulates", sub: "Current Unit", week: "Week 3", phase: "next", tip: "Memorize the order: SAS means the angle must be SMACK in the middle of the two sides."},
      {title: "AAS & HL Theorems", sub: "Triangle Congruence", week: "Week 4", phase: "next", tip: "HL (Hypotenuse-Leg) only works for RIGHT triangles. Don't try to use it on others!"},
      {title: "CPCTC Applications", sub: "Proofs", week: "Week 5", phase: "next", tip: "Corresponding Parts of Congruent Triangles are Congruent. Use this AFTER you prove the triangles are equal."}
    ],
    tip: { 
      lost: "Geometry is a language. If you don't know the definitions (segment, ray, plane), you can't read the 'map' of the problem. Use flashcards for vocab and theorems, and start drawing EVERY problem, even if a diagram isn't provided.", 
      gaps: "Stop trying to memorize proofs. Instead, learn the 'reasons' like Vertical Angle Theorem or Reflexive Property. Think of a proof like a puzzle: you know the start (Given) and the end (Prove)—how do you connect the dots?", 
      shaky: "Focus on triangle relationships. If you master triangle congruence (SSS, SAS, etc.), you can solve almost anything in the first semester. Practice 'CPCTC' problems specifically to see how shapes link together." 
    }
  },
  physics: {
    label: "Physics",
    lost: [
      {title: "Scientific Notation & Units", sub: "Math Prep", week: "Week 1", phase: "gap", tip: "Scientific notation makes huge/tiny numbers manageable. Always check your exponents (e.g., 10³ vs 10⁻³)."},
      {title: "Metric Prefixes", sub: "Math Prep", week: "Week 1", phase: "gap", tip: "Kilo (10³), Centi (10⁻²), Milli (10⁻³). Memorize these—they appear in almost every calculation."},
      {title: "Significant Figures", sub: "Lab Skill", week: "Week 2", phase: "gap", tip: "Sig figs reflect the precision of your measurement. In multiplying, use the least number of sig figs available."},
      {title: "Vector Addition (Head-to-Tail)", sub: "Unit 1", week: "Week 2", phase: "gap", tip: "Draw your first vector, then start the second at the arrow of the first. The result is the 'shortcut' from start to end."},
      {title: "Scalar vs. Vector quantities", sub: "Physics Basics", week: "Week 3", phase: "gap", tip: "Scalars are just magnitude (speed). Vectors have magnitude AND direction (velocity). Direction matters!"},
      {title: "1D Kinematics Equations", sub: "Current Unit", week: "Week 4", phase: "next", tip: "List your 'Knowns' and 'Unknowns' first. This tells you which of the 'Big 3' equations you need to use."},
      {title: "Solving for Final Velocity", sub: "Kinematics", week: "Week 5", phase: "next", tip: "Vf = Vi + at. If it starts from rest, Vi is 0. If it stops, Vf is 0."},
      {title: "Interpreting p-t graphs", sub: "Graphing", week: "Week 6", phase: "next", tip: "The slope of a Position-Time graph is Velocity. A straight line means constant velocity; a curve means acceleration."}
    ],
    gaps: [
      {title: "Velocity vs. Acceleration Graphs", sub: "Unit 1", week: "Week 1", phase: "gap", tip: "On a v-t graph, the slope is Acceleration and the area under the curve is Displacement."},
      {title: "Average vs Instantaneous Speed", sub: "Refresher", week: "Week 1-2", phase: "gap", tip: "Average speed is total distance / total time. Instantaneous is what your speedometer shows right now."},
      {title: "Displacement calculation", sub: "Skill", week: "Week 2", phase: "gap", tip: "Displacement is 'change in position' (end - start). It can be negative, unlike distance!"},
      {title: "Free Fall & Gravity", sub: "Current Unit", week: "Week 3", phase: "next", tip: "Gravity (g) is always -9.8 m/s² on Earth. At the very top of a toss, the vertical velocity is exactly 0."},
      {title: "Projectile Motion Basics", sub: "2D Kinematics", week: "Week 4", phase: "next", tip: "Horizontal velocity (Vx) NEVER changes because gravity only pulls vertically. Solve x and y separately."},
      {title: "Vertical vs Horizontal velocity", sub: "Projectiles", week: "Week 5", phase: "next", tip: "Use trig: Vx = V·cos(θ) and Vy = V·sin(θ). This is the starting point for every 2D problem."}
    ],
    shaky: [
      {title: "Calculating Net Force", sub: "Refresher", week: "Week 1", phase: "gap", tip: "Net Force (ΣF) is the sum of all forces. Opposite directions? Subtract them. Same direction? Add them."},
      {title: "Mass vs. Weight", sub: "Physics Concepts", week: "Week 1", phase: "gap", tip: "Mass is how much 'stuff' is in you (kg). Weight is the pull of gravity (N). Weight = mg."},
      {title: "Free Body Diagrams", sub: "Skill", week: "Week 1-2", phase: "gap", tip: "Draw a dot for the object and arrows for every force (Gravity down, Normal up, etc.). If arrows aren't balanced, it accelerates!"},
      {title: "Newton's Second Law (F=ma)", sub: "Current Unit", week: "Week 2", phase: "next", tip: "Force and Acceleration are directly proportional. If you double the force, you double the acceleration."},
      {title: "Friction & Normal Force", sub: "Dynamics", week: "Week 3", phase: "next", tip: "Friction (Ff) = μ·Fn. It always opposes the direction of motion or intended motion."},
      {title: "Inertia & First Law", sub: "Dynamics", week: "Week 4", phase: "next", tip: "Objects keep doing what they're doing unless forced to change. More mass = more inertia = harder to move."}
    ],
    tip: { 
      lost: "Physics is Math with a story. If your units (meters, seconds, Newtons) don't make sense, your answer is wrong. Master 'Dimensional Analysis'—if your units don't cancel out to the right target unit, re-evaluate your setup.", 
      gaps: "Kinematics is the foundation. If you can't solve for time (t) in a 1D problem, you'll be lost in 2D and Forces. Re-watch tutorials on the 'Big 3' equations and practice selecting the right formula based on your 'Givens'.", 
      shaky: "Vectors are the secret to Physics. If you're shaky on SOH-CAH-TOA, you'll struggle with projectiles and forces. Review basic trig and always draw your Free-Body Diagrams (FBDs) before writing any equations." 
    }
  },
  ap_stats: {
    label: "AP Statistics",
    lost: [
      {title: "Categorical vs Quantitative Data", sub: "Unit 1", week: "Week 1", phase: "gap", tip: "Categorical is a bucket (color, zip code). Quantitative is a number you can average (height, test score)."},
      {title: "Frequency Tables", sub: "Refresher", week: "Week 1", phase: "gap", tip: "Counts the number of times each value appears. Use relative frequency (percentages) to compare different group sizes."},
      {title: "Standard Deviation Meaning", sub: "Foundation", week: "Week 2", phase: "gap", tip: "It's the 'average distance from the mean'. High SD means the data is spread out; low SD means it's clustered close."},
      {title: "Calculating Mean & Median", sub: "Descriptive Stats", week: "Week 2", phase: "gap", tip: "The median is 'resistant' to outliers, but the mean is 'pulled' toward the tail. Look for skewness!"},
      {title: "Outlier Rules (IQR)", sub: "Skills", week: "Week 3", phase: "gap", tip: "Outlier = Q1 - 1.5·IQR or Q3 + 1.5·IQR. If it falls outside those 'fences', it's an outlier."},
      {title: "Normal Distributions (Z-Scores)", sub: "Current Unit", week: "Week 4", phase: "next", tip: "Z = (value - mean) / SD. It tells you how many standard deviations you are above or below average."},
      {title: "Percentiles", sub: "Application", week: "Week 5", phase: "next", tip: "The 80th percentile means you performed better than 80% of the population. It's about relative standing."},
      {title: "Empirical Rule (68-95-99.7)", sub: "Normal Dist", week: "Week 6", phase: "next", tip: "In a Normal curve, 95% of data falls within TWO standard deviations of the mean. Memorize these numbers!"}
    ],
    gaps: [
      {title: "The 68-95-99.7 Rule", sub: "Unit 2", week: "Week 1", phase: "gap", tip: "Only works for Normal distributions. If the data is skewed, this rule does not apply!"},
      {title: "Z-score calculations", sub: "Refresher", week: "Week 1", phase: "gap", tip: "Practice using the Z-table or 'normCdf' on your calculator to find areas under the curve."},
      {title: "Comparing distributions", sub: "Writing Skill", week: "Week 2", phase: "gap", tip: "Use the SOCS acronym: Shape, Outliers, Center, Spread. Always use comparative words like 'higher' or 'less'."},
      {title: "Residuals & Least Squares", sub: "Unit 3 Prep", week: "Week 3", phase: "next", tip: "Residual = Actual - Predicted (AP). A good model has no clear pattern in the residual plot."},
      {title: "Standard deviation of residual", sub: "Regression", week: "Week 4", phase: "next", tip: "This value (s) represents the 'typical error' our model makes when predicting the y-variable."},
      {title: "Influential points", sub: "Regression", week: "Week 5", phase: "next", tip: "These are points that, if removed, would significantly change the slope or intercept of the regression line."}
    ],
    shaky: [
      {title: "Correlation Coefficient (r)", sub: "Review", week: "Week 1", phase: "gap", tip: "Ranges from -1 to +1. 0 means no linear relationship. It does NOT prove causation!"},
      {title: "Coefficient of Determ. (R^2)", sub: "Regression", week: "Week 1", phase: "gap", tip: "The percentage of variation in 'y' that can be explained by the linear relationship with 'x'."},
      {title: "Interpreting Slope in Context", sub: "Writing", week: "Week 1-2", phase: "gap", tip: "'For every 1 unit increase in x, our model predicts an increase of [slope] in y.' Use this exact wording."},
      {title: "Sampling Methods & Bias", sub: "Current Unit", week: "Week 2", phase: "next", tip: "Voluntary response and convenience sampling are almost always biased. SRS (Simple Random Sample) is the gold standard."},
      {title: "Randomization", sub: "Experiment Design", week: "Week 3", phase: "next", tip: "Random assignment balances out the lurking variables (confounding) between the treatment and control groups."},
      {title: "Blinding & Placebos", sub: "Design", week: "Week 4", phase: "next", tip: "Double-blinding prevents bias from both the subjects AND the researchers measuring the results."}
    ],
    tip: { 
      lost: "Context is everything in Stats. Never just give a raw number; explain what it means 'in the context of the data'. If you are calculating the mean, tell me what that means for the people or objects being measured.", 
      gaps: "The Normal Curve is the foundation for the entire course. Master Z-score lookups and the 68-95-99.7 rule now, or the second semester (Inference) will be impossible.", 
      shaky: "Stop relying on your calculator for the 'Why'. You can find 'r' with a button, but you need to know that 'r' only measures LINEAR strength. Practice describing scatterplots using 'Direction, Form, Strength, and Outliers' (DFSO)." 
    }
  },
  world_hist: {
    label: "World History",
    lost: [
      {title: "Timeline Analysis", sub: "Skill", week: "W1", phase: "gap", tip: "Draw a physical line and place events in order. If you don't know the 'before and after', you won't see the cause and effect."},
      {title: "Map Interpretation", sub: "Geography", week: "W1", phase: "gap", tip: "History happens in space! Look at how mountains or oceans protected some nations while exposing others to trade/war."},
      {title: "Primary vs Secondary Sources", sub: "Literacy", week: "W2", phase: "gap", tip: "A primary source is an eyewitness; a secondary source is an interpretation. Always ask: 'What was the author's motive?'"},
      {title: "Industrial Revolution", sub: "Unit 4", week: "W3", phase: "next", tip: "Focus on the shift from 'Handmade' to 'Machine-made'. This change affected everything from family life to global power."},
      {title: "WWI Causes", sub: "Modern Era", week: "W4", phase: "next", tip: "Use the MAIN acronym: Militarism, Alliances, Imperialism, and Nationalism. These were the four long-term triggers."},
      {title: "Great Depression", sub: "Modern Era", week: "W5", phase: "next", tip: "It wasn't just a US event. Look at how the global economy was interconnected and how one crash led to a worldwide domino effect."}
    ],
    gaps: [
      {title: "Scientific Revolution", sub: "Unit 2", week: "W1", phase: "gap", tip: "The big shift was from 'Trusting the Church' to 'Trusting Observation'. Think of it as the birth of the scientific method."},
      {title: "Enlightenment Ideals", sub: "Theory", week: "W1-2", phase: "gap", tip: "Focus on Locke (Natural Rights) and Montesquieu (Separation of Powers). These ideas fueled the revolutions that followed."},
      {title: "French Revolution Basics", sub: "Unit 3 Prep", week: "W2", phase: "next", tip: "The 3 Estates were the key. The Third Estate (98% of people) had no power and paid all the taxes—a recipe for disaster."},
      {title: "Napoleon's Rise", sub: "Unit 3", week: "W3", phase: "next", tip: "He rose to power because the post-revolution government was chaotic. He promised stability and brought French law to all of Europe."}
    ],
    shaky: [
      {title: "Protestant Reformation", sub: "Review", week: "W1", phase: "gap", tip: "Martin Luther's 95 Theses challenged the Church's authority. The printing press made this the first 'viral' movement in history."},
      {title: "Renaissance Art", sub: "Culture", week: "W1-2", phase: "gap", tip: "Look for 'Humanism'—the shift toward realistic human forms and emotions instead of purely religious symbols."},
      {title: "Age of Exploration", sub: "Current Unit", week: "W2", phase: "next", tip: "Driven by Gold, God, and Glory. New technology like the Astrolabe and Caravel made these long-distance journeys possible."},
      {title: "Columbian Exchange", sub: "Impact", week: "W3", phase: "next", tip: "It's the global transfer of plants, animals, and diseases. Focus on how Old World diseases decimated New World populations."}
    ],
    tip: { 
      lost: "Think of History as a story, not a list of dates. If you don't know the order of major eras (Renaissance -> Enlightenment -> Industrialization), you won't see the 'Why' behind events. Build a physical timeline on your wall.", 
      gaps: "Revolutions follow a pattern: Social Inequality + Enlightenment Ideas + Economic Crisis = Action. Use this 4-step framework to compare the French, American, and Haitian revolutions—they have more in common than you think.", 
      shaky: "Primary sources are your gold standard. Practice identifying the author's point of view (POV). Ask: 'Why are they telling this story right now, and what do they want the reader to believe?'" 
    }
  },
  biology: {
    label: "Biology",
    lost: [
      {title: "Cell Theory", sub: "Unit 1", week: "W1", phase: "gap", tip: "All life is made of cells. Remember: cells only come from other cells! This is the most basic building block of biology."},
      {title: "Scientific Method", sub: "Intro", week: "W1", phase: "gap", tip: "Identify your Independent (what you change) and Dependent (what you measure) variables. A good experiment only changes ONE thing."},
      {title: "Microscope Use", sub: "Lab Skill", week: "W2", phase: "gap", tip: "Always start on the lowest power (4x) and use the coarse focus first. Only use the fine focus on high power to avoid breaking slides!"},
      {title: "Genetics Intro", sub: "Unit 3", week: "W3", phase: "next", tip: "Dominant alleles (Big letters) always mask Recessive ones (Small letters). Use Punnett squares to predict the 'chance' of a trait."},
      {title: "DNA Replication", sub: "Unit 3", week: "W4", phase: "next", tip: "A pairs with T, and C pairs with G. It's like a zipper—the DNA unzips and each side acts as a template for a new strand."},
      {title: "Mitosis vs Meiosis", sub: "Reproduction", week: "W5", phase: "next", tip: "Mitosis makes twin cells (Skin, Blood). Meiosis makes unique cells (Sperm, Egg) with half the DNA for reproduction."}
    ],
    gaps: [
      {title: "Photosynthesis", sub: "Unit 2", week: "W1", phase: "gap", tip: "Happens in the Chloroplast. It takes sunlight, water, and CO2 and turns them into Glucose (sugar) and Oxygen."},
      {title: "Cellular Respiration", sub: "Metabolism", week: "W1-2", phase: "gap", tip: "Happens in the Mitochondria. It's the opposite of photosynthesis: it breaks down sugar to create ATP (energy)."},
      {title: "Energy Flow", sub: "Unit 2 Prep", week: "W2", phase: "next", tip: "Energy enters as sunlight and leaves as heat. It moves through a system, but it doesn't 'cycle'—it is used up at each level."},
      {title: "Food Webs", sub: "Ecology", week: "W3", phase: "next", tip: "Arrows show the flow of energy. They point from the thing being eaten to the thing that eats it (into the stomach)."}
    ],
    shaky: [
      {title: "Macromolecules", sub: "Review", week: "W1", phase: "gap", tip: "The 'Big 4': Carbs (energy), Lipids (storage), Proteins (machines), and Nucleic Acids (information/DNA)."},
      {title: "Enzymes & Reactions", sub: "Bio-Chem", week: "W1", phase: "gap", tip: "Enzymes are like 'keys' that speed up reactions. They have a specific 'active site' shape that only fits one 'substrate'."},
      {title: "Osmosis & Diffusion", sub: "Current Unit", week: "W2", phase: "next", tip: "Diffusion is high-to-low concentration. Osmosis is just the diffusion of WATER across a membrane to reach balance."},
      {title: "Active Transport", sub: "Cells", week: "W3", phase: "next", tip: "Requires ATP (energy) because you are pushing things 'uphill' from low to high concentration. Think of a pump!"}
    ],
    tip: { 
      lost: "Biology is a hierarchy: Molecules -> Cells -> Organs -> Systems. If you don't understand how a single cell works, you can't understand a whole human. Focus on the 'Structure-Function' relationship—parts look the way they do because of what they DO.", 
      gaps: "Energy flow is the key to life. Photosynthesis and Cellular Respiration are just two sides of the same coin. Draw the 'Carbon Cycle' to see how energy flows from the sun into our food and then into our ATP.", 
      shaky: "Genetics is just logic. Use Punnett squares for everything, and remember: DNA is just a recipe book. If the recipe (gene) changes via mutation, the cake (protein/trait) changes. Focus on the 'Central Dogma': DNA -> RNA -> Protein." 
    }
  },
  chemistry: {
    label: "Chemistry",
    lost: [
      {title: "Valence Electrons", sub: "Unit 1", week: "W1", phase: "gap", tip: "These are the outer-shell electrons that do all the 'work' in bonding. Group number (1-8) tells you how many they have."},
      {title: "Matter Classification", sub: "Basics", week: "W1", phase: "gap", tip: "Elements (pure), Compounds (mixed/bonded), and Mixtures (just physically together). Focus on the differences in separation methods."},
      {title: "Density Calculations", sub: "Math Skill", week: "W2", phase: "gap", tip: "Density = Mass / Volume. Think of the 'Heart' formula: M on top, V on bottom makes a heart shape!"},
      {title: "Stoichiometry", sub: "Unit 4", week: "W3", phase: "next", tip: "It's all about ratios. If you have 2 hydrogen and 1 oxygen, you can make 1 water molecule. Units MUST match throughout."},
      {title: "Mole Calculations", sub: "Units", week: "W4", phase: "next", tip: "The Mole is 6.02x10²³. It's just a 'Chemistry Dozen'. Use molar mass from the periodic table to convert grams to moles."},
      {title: "Gas Laws", sub: "Thermodynamics", week: "W5", phase: "next", tip: "PV=nRT. Pressure, Volume, and Temperature are all connected. If you squeeze a gas (lower Volume), the Pressure goes up!"}
    ],
    gaps: [
      {title: "Ionic Bonding", sub: "Unit 2", week: "W1", phase: "gap", tip: "Metal + Nonmetal. One atom steals an electron, and they stick together because of opposite charges (electrostatic attraction)."},
      {title: "Covalent Bonding", sub: "Unit 2", week: "W1-2", phase: "gap", tip: "Nonmetal + Nonmetal. They share electrons to both feel stable. Think of it as a 'co-operation' between atoms."},
      {title: "Lewis Structures", sub: "Unit 2 Prep", week: "W2", phase: "next", tip: "Count total valence electrons first! Draw the dots around atoms, then create 'bonds' (lines) to share pairs."},
      {title: "VSEPR Theory", sub: "Shapes", week: "W3", phase: "next", tip: "Electrons hate each other and want to stay as far apart as possible. This 'repulsion' creates the 3D shapes of molecules."}
    ],
    shaky: [
      {title: "Periodic Trends", sub: "Review", week: "W1", phase: "gap", tip: "Electronegativity and Ionization Energy increase up and to the right. Atomic size increases down and to the left."},
      {title: "Atomic Orbitals", sub: "Atoms", week: "W1", phase: "gap", tip: "Focus on s, p, d, and f subshells. Each orbital can hold exactly 2 electrons with opposite spins."},
      {title: "Balancing Equations", sub: "Current Unit", week: "W2", phase: "next", tip: "Matter cannot be created or destroyed. You can ONLY change coefficients (big numbers), never subscripts (small numbers)!"},
      {title: "Types of Reactions", sub: "Changes", week: "W3", phase: "next", tip: "Learn the 5 main types: Synthesis, Decomposition, Single Replacement, Double Replacement, and Combustion."}
    ],
    tip: { 
      lost: "The Periodic Table is your ultimate cheat sheet. If you can't read it, you're lost. Learn the trends: why do elements on the far left want to GIVE UP electrons, while elements on the right want to STEAL them? That governs everything.", 
      gaps: "Chemical bonding is about stability. Everything wants a 'Full Octet' (8 valence electrons). If you understand why atoms share or trade electrons to reach that number, naming compounds and drawing Lewis structures becomes a simple logic game.", 
      shaky: "Stoichiometry is just a recipe. 1 mole of A + 2 moles of B = 1 mole of C. If you are given grams, you MUST convert to moles first—moles are the only universal 'currency' in Chemistry that allows you to compare different substances fairly." 
    }
  },
  usgov: {
    label: "U.S. Government",
    lost: [
      {title: "Checks & Balances", sub: "Unit 1", week: "W1", phase: "gap", tip: "Each branch has a way to stop the others. The President can veto; Congress can override; Courts can rule unconstitutional."},
      {title: "Bill of Rights", sub: "Constitution", week: "W1", phase: "gap", tip: "The first 10 amendments. They exist to protect your individual liberties from being taken by the government."},
      {title: "Separation of Powers", sub: "Structure", week: "W2", phase: "gap", tip: "Legislative makes laws, Executive enforces them, Judicial interprets them. It's about preventing any one person from having all the power."},
      {title: "Supreme Court Cases", sub: "Judicial", week: "W3", phase: "next", tip: "Marbury v. Madison is the 'Big One'—it gave the court the power of Judicial Review (the final say)."},
      {title: "Voter Behavior", sub: "Politics", week: "W4", phase: "next", tip: "Age, education, and income are the biggest predictors of whether someone will show up to vote on election day."},
      {title: "Interest Groups", sub: "Lobbying", week: "W5", phase: "next", tip: "Organizations that try to influence policy without getting elected. They use money, information, and mobilization to sway Congress."}
    ],
    gaps: [
      {title: "Federalism", sub: "Unit 2", week: "W1", phase: "gap", tip: "The layer-cake vs. marble-cake analogy. It's the division of power between the National (Federal) and the State governments."},
      {title: "Judicial Review", sub: "Judicial", week: "W1-2", phase: "gap", tip: "The power of the court to declare a law or presidential action unconstitutional. It makes the Judicial branch an equal player."},
      {title: "Civil Liberties", sub: "Unit 2 Prep", week: "W2", phase: "next", tip: "Liberties are protections FROM the government (Bill of Rights). Rights are protections BY the government (Equality)."},
      {title: "1st Amendment Cases", sub: "Rights", week: "W3", phase: "next", tip: "Focus on 'Free Speech' (Tinker v. Des Moines) and 'Free Exercise' of religion. Learn where the court draws the line."}
    ],
    shaky: [
      {title: "Electoral College", sub: "Review", week: "W1", phase: "gap", tip: "It's a 'Winner Take All' system in 48 states. You aren't voting for the President directly; you're voting for electors."},
      {title: "Campaign Finance", sub: "Politics", week: "W1", phase: "gap", tip: "Focus on Citizens United. It ruled that corporate spending on political ads is a form of 'Free Speech' and cannot be limited."},
      {title: "Legislative Process", sub: "Current Unit", week: "W2", phase: "next", tip: "Most bills die in committee! If a bill makes it to the floor, it still has to pass both the House and the Senate in the exact same form."},
      {title: "Gerrymandering", sub: "Representation", week: "W3", phase: "next", tip: "Redrawing district lines to favor one party. It happens every 10 years after the Census and can lead to 'safe' seats."}
    ],
    tip: { 
      lost: "The Constitution is the rulebook for the country. If you don't know the 3 branches and the Bill of Rights, you're playing the game without knowing the rules. Focus on 'Federalism'—the constant tug-of-war between State and National power.", 
      gaps: "Supreme Court cases are not just history; they are current law. For every required case, learn the 'Facts', the 'Ruling', and the 'Constitutional Question'. Why did the court say yes or no, and how did it change the definition of our rights?", 
      shaky: "The 'Iron Triangle' (Bureaucracy, Congress, Interest Groups) explains how D.C. actually works. Politics is about influence—follow the money, the lobbyists, and the voter data to see how a simple idea becomes a complex national policy." 
    }
  },
  precalc: {
    label: "Pre-Calculus",
    lost: [
      {title: "Unit Circle", sub: "Trig", week: "W1", phase: "gap", tip: "You must know all angles in radians. Use 'Symmetry' (Reference Angles) to memorize the first quadrant, then just flip the signs for others."},
      {title: "Domain & Range", sub: "Functions", week: "W1", phase: "gap", tip: "Domain is 'Left to Right' (x-values). Range is 'Bottom to Top' (y-values). Watch out for square roots and denominators!"},
      {title: "Parent Functions", sub: "Algebra II", week: "W2", phase: "gap", tip: "Master the shapes of the 'Big 8' functions (Linear, Quadratic, Log, etc.). If you know the parent, you can graph any transformation."},
      {title: "Limits Intro", sub: "Calculus Prep", week: "W3", phase: "next", tip: "A limit is just a 'destination'. What y-value is the function approaching as x gets closer to a certain number?"},
      {title: "Derivative Intro", sub: "Calc Prep", week: "W4", phase: "next", tip: "A derivative is the 'slope' of a curve at a single point. It's the rate of change at that exact moment in time."},
      {title: "Continuity", sub: "Calc Prep", week: "W5", phase: "next", tip: "If you have to lift your pencil to draw the graph, it's not continuous. Check for holes, jumps, and asymptotes."}
    ],
    gaps: [
      {title: "Law of Sines/Cosines", sub: "Unit 2", week: "W1", phase: "gap", tip: "Use Law of Sines when you have an 'Angle-Side' pair. Use Law of Cosines for SSS or SAS situations."},
      {title: "Trigonometric Identities", sub: "Trig", week: "W1-2", phase: "gap", tip: "These are like a math puzzle. Replace tan with sin/cos to simplify. Use sin² + cos² = 1 whenever possible!"},
      {title: "Polar Coordinates", sub: "Unit 2 Prep", week: "W2", phase: "next", tip: "x = r·cos(θ) and y = r·sin(θ). You are just converting between circular and grid-based maps."},
      {title: "Vectors in 2D", sub: "Math Skill", week: "W3", phase: "next", tip: "A vector is magnitude (length) and direction. Add them by breaking them into x and y components first."}
    ],
    shaky: [
      {title: "Logarithmic Properties", sub: "Review", week: "W1", phase: "gap", tip: "Multiplying inside a log is adding outside. Power becomes a coefficient. Master these 3 rules to simplify any log equation."},
      {title: "Exponential Growth", sub: "Algebra II", week: "W1", phase: "gap", tip: "Use y = Pe^(rt) for continuous growth. 'r' is the rate, and 't' is time. This is the foundation for finance and biology math."},
      {title: "Rational Functions", sub: "Current Unit", week: "W2", phase: "next", tip: "Focus on Asymptotes. Set the denominator to zero to find the Vertical ones. Check degrees for the Horizontal ones."},
      {title: "Partial Fractions", sub: "Advanced", week: "W3", phase: "next", tip: "This is 'un-adding' a fraction. You are breaking a complex fraction back into two simpler pieces. It's essential for Calculus!"}
    ],
    tip: { 
      lost: "Trig is the mountain you have to climb. If you don't have the Unit Circle completely memorized (all quadrants, all radians), you will struggle for the rest of the year. Use 'Symmetry' (Reference Angles) to help you memorize the first quadrant, then just flip the signs.", 
      gaps: "Trig Identities and Equations are all about 'Substitution'. If you see something complex, replace it with something simpler (like replacing tan with sin/cos). Practice 'Verifying Identities' like a proof—you are just rewriting one side to match the other.", 
      shaky: "Limits and Continuity are the bridge to Calculus. If a function has a hole, a vertical asymptote, or a jump, it's not continuous. Visualize the graph—if you have to lift your pencil to draw it, there's a continuity issue at that point." 
    }
  },
  english10: {
    label: "English 10",
    lost: [
      {title: "PEEL Paragraphs", sub: "Writing", week: "W1", phase: "gap", tip: "Point, Evidence, Explanation, Link. It's the skeleton of a good paragraph. Never leave a quote 'hanging' without explaining it."},
      {title: "Annotation Skills", sub: "Reading", week: "W1", phase: "gap", tip: "Read with a pen in hand. Mark words you don't know and note where characters make major decisions. This makes writing essays much faster."},
      {title: "MLA Citation", sub: "Research", week: "W2", phase: "gap", tip: "Author and page number in parentheses (Smith 42). If you don't cite, it's plagiarism, even if you just summarized the idea."},
      {title: "Tragic Hero Archetypes", sub: "Drama", week: "W3", phase: "next", tip: "A tragic hero is basically a good person with one 'fatal flaw' (like pride or indecision) that leads to their downfall."},
      {title: "Persuasive Techniques", sub: "Speech", week: "W4", phase: "next", tip: "Rhetorical questions, repetition, and the 'Rule of Three'. These are used to make a speech more memorable and convincing."},
      {title: "Theme Statements", sub: "Analysis", week: "W5", phase: "next", tip: "A theme is NOT one word. 'Love' is a topic; 'Love can be destructive' is a theme. Always write themes as full sentences."}
    ],
    gaps: [
      {title: "Character Arcs", sub: "Unit 2", week: "W1", phase: "gap", tip: "Look at how a character changes from the beginning to the end. What specific event forced them to grow or fail?"},
      {title: "Symbolism in Fiction", sub: "Reading", week: "W1-2", phase: "gap", tip: "An object that represents a big idea (like a green light representing hope). If the author repeats an object, it's likely a symbol."},
      {title: "Rhetorical Analysis", sub: "Unit 2 Prep", week: "W2", phase: "next", tip: "Ask: 'HOW is the author trying to convince me?' Look at their word choices and emotional appeals."},
      {title: "Ethos, Pathos, Logos", sub: "Persuasion", week: "W3", phase: "next", tip: "Ethos = Trust. Pathos = Emotion. Logos = Logic. The most powerful arguments use all three effectively."}
    ],
    shaky: [
      {title: "Grammar: Semicolons", sub: "Review", week: "W1", phase: "gap", tip: "Use them to join two related sentences. If you can use a period, you can probably use a semicolon."},
      {title: "Vocabulary in Context", sub: "Skill", week: "W1", phase: "gap", tip: "Don't stop reading! Use the words around a difficult word to hunt for clues about its meaning."},
      {title: "Narrative Pacing", sub: "Current Unit", week: "W2", phase: "next", tip: "How fast or slow the story moves. Action scenes are fast (short sentences); descriptions are slow (long sentences)."},
      {title: "Show vs Tell", sub: "Writing", week: "W3", phase: "next", tip: "Instead of 'He was angry', show it: 'He slammed the door and ground his teeth.' It's much more engaging for the reader."}
    ],
    tip: { 
      lost: "Analysis is not about 'guessing' what the author meant; it's about proving it with evidence. Use the PEEL method (Point, Evidence, Explanation, Link). If you don't have a specific quote from the text, you don't have a valid point.", 
      gaps: "Literary devices (Metaphor, Irony, Symbolism) are the author's toolbox. For every device you find, ask: 'How does this specific choice make the theme clearer?' The theme is the 'Universal Truth' the author wants you to understand about the real world.", 
      shaky: "Focus on 'Authorial Intent'. Why did the author choose a 1st person narrator instead of 3rd? Why is the setting a storm instead of a sunny day? Every choice in a classic text is intentional. Start looking for the 'Why' behind every description." 
    }
  },
  english9: {
    label: "English 9",
    lost: [
      {title: "Parts of Speech", sub: "Grammar", week: "W1", phase: "gap", tip: "Nouns, Verbs, and Adjectives. If you don't know what they are, you can't fix a broken sentence. Use a color-coded highlighter for each!"},
      {title: "Plot Structure", sub: "Literary Basics", week: "W1", phase: "gap", tip: "Exposition, Rising Action, Climax, Falling Action, Resolution. Every great story follows this specific mountain shape."},
      {title: "Conflict Types", sub: "Literary Basics", week: "W2", phase: "gap", tip: "Man vs. Self, Man vs. Nature, Man vs. Man. Conflict is the engine that drives the story forward—without it, there's no plot."},
      {title: "Intro to Poetry", sub: "Unit 3", week: "W3", phase: "next", tip: "Poetry is about 'Compression'. Every word is chosen for its sound, rhythm, and hidden meaning. Read it out loud to hear the music!"},
      {title: "Metaphor & Simile", sub: "Figurative Lang", week: "W4", phase: "next", tip: "Similes use 'like' or 'as'; metaphors say one thing IS another. Both are used to make the unfamiliar feel familiar."}
    ],
    gaps: [
      {title: "Setting & Mood", sub: "Unit 2", week: "W1", phase: "gap", tip: "Setting is the 'Where' and 'When'. Mood is the 'Feeling' the author creates (scary, happy, tense). They are always connected."},
      {title: "Point of View", sub: "Narration", week: "W1-2", phase: "gap", tip: "1st person (I), 2nd person (You), 3rd person (He/She). The POV determines what information the reader is allowed to know."},
      {title: "The Odyssey Intro", sub: "Unit 3 Prep", week: "W2", phase: "next", tip: "An Epic Poem about a long journey. Look for the 'In Media Res'—starting in the middle of the action!"},
      {title: "Epic Hero Traits", sub: "Archetypes", week: "W3", phase: "next", tip: "Epic heroes are larger than life, but they always have a 'Hubris' (excessive pride) that gets them into trouble."}
    ],
    shaky: [
      {title: "Sentence Fragments", sub: "Grammar", week: "W1", phase: "gap", tip: "A fragment is a sentence missing a subject or a verb. It's an incomplete thought. Make sure every sentence can stand on its own."},
      {title: "Active vs Passive Voice", sub: "Writing", week: "W1", phase: "gap", tip: "Active: 'The dog bit the man.' Passive: 'The man was bitten by the dog.' Use active voice to make your writing stronger and clearer."},
      {title: "Topic Sentences", sub: "Composition", week: "W2", phase: "next", tip: "The first sentence of a paragraph. It tells the reader exactly what that paragraph is going to prove. Keep it simple and direct."},
      {title: "Concluding Remarks", sub: "Composition", week: "W3", phase: "next", tip: "Don't just repeat your topic sentence. Explain WHY the information in the paragraph matters to your overall argument."}
    ],
    tip: { 
      lost: "Master the sentence before you try the essay. If you have fragments or run-on sentences, your best ideas won't land. Focus on 'Subject-Verb Agreement' and using punctuation to separate your independent thoughts clearly.", 
      gaps: "Conflict is the engine of any story. Whether it is Man vs. Nature or Man vs. Self, identify the main struggle within the first 10 pages. This will help you predict the plot turns and understand why characters act the way they do.", 
      shaky: "Vocabulary 'in context' is your best friend. Don't skip words you don't know—look at the words AROUND the unknown word to guess its meaning, then check. This is the fastest way to improve your reading comprehension on any exam." 
    }
  },
  us_hist: {
    label: "U.S. History",
    lost: [
      {title: "Colonial Foundations", sub: "Unit 1", week: "W1", phase: "gap", tip: "Jamestown vs Plymouth. One was for Gold, the other for God. This difference shaped the North and South for centuries."},
      {title: "Declaration of Independence", sub: "Revolution", week: "W1", phase: "gap", tip: "It's a break-up letter to the King. Focus on the 'Natural Rights'—Life, Liberty, and Property (later Pursuit of Happiness)."},
      {title: "Constitutional Convention", sub: "Founding", week: "W2", phase: "gap", tip: "The Great Compromise created our Congress. Big states got the House (population); small states got the Senate (equality)."},
      {title: "Civil War Causes", sub: "Unit 4", week: "W3", phase: "next", tip: "Focus on the 1850s. The Fugitive Slave Act and the Dred Scott case made war inevitable by destroying all trust."},
      {title: "Reconstruction", sub: "Post-War", week: "W4", phase: "next", tip: "The era of the 13th, 14th, and 15th Amendments. They promised equality, but Jim Crow laws quickly took it away."}
    ],
    gaps: [
      {title: "The Gilded Age", sub: "Unit 5", week: "W1", phase: "gap", tip: "It looked good on the outside (Gold), but was corrupt on the inside. Think Monopolies, Social Darwinism, and Labor Unions."},
      {title: "Progressive Era", sub: "Reform", week: "W1-2", phase: "gap", tip: "The 'Fix-It' era. Muckrakers exposed the filth, and the government passed laws for food safety, women's suffrage, and child labor."},
      {title: "Imperialism Basics", sub: "Unit 6 Prep", week: "W2", phase: "next", tip: "The US expanding overseas. Driven by a desire for new markets and the belief that the US needed to be a global power."},
      {title: "Spanish-American War", sub: "Global Power", week: "W3", phase: "next", tip: "The 'Splendid Little War'. It lasted 4 months and gave the US control of Guam, Puerto Rico, and the Philippines."}
    ],
    shaky: [
      {title: "Jacksonian Democracy", sub: "Review", week: "W1", phase: "gap", tip: "The expansion of voting to the 'Common Man', but also the 'Trail of Tears'. Jackson used the Presidency like a King."},
      {title: "Manifest Destiny", sub: "Expansion", week: "W1", phase: "gap", tip: "The belief that America was destined by God to expand to the Pacific. This led to the Mexican-American War and huge tension over slavery."},
      {title: "WWI Homefront", sub: "Current Unit", week: "W2", phase: "next", tip: "How the war changed life at home. Women in factories, the Great Migration of Black Americans to the North, and the limits on free speech."},
      {title: "The Roaring 20s", sub: "Culture", week: "W3", phase: "next", tip: "A decade of conflict between 'Traditional' and 'Modern' values. Jazz, flappers, and cars vs. Prohibition and religious fundamentalism."}
    ],
    tip: { 
      lost: "History is a series of 'Turning Points'. Identify the big ones: 1776 (Independence), 1865 (Civil War End), 1914 (WWI), 1929 (Depression), 1941 (WWII). If you know what happened in those years, you can 'bracket' almost any other event.", 
      gaps: "Periodization is everything. The 'Gilded Age' is defined by corruption and growth, while the 'Progressive Era' is defined by reform and fixing those problems. Learn the 3 big characteristics of each era to simplify your studying.", 
      shaky: "Historical Complexity is your goal. History isn't 'Good Guys' vs 'Bad Guys'; it's about competing interests. Try to argue FOR the side you disagree with (e.g., the Anti-Federalists) to see the full picture of why our government is structured this way." 
    }
  },
  algebra2: {
    label: "Algebra II",
    lost: [
      {title: "Systems of Equations", sub: "Algebra Review", week: "W1", phase: "gap", tip: "Use Substitution if one variable is already alone. Use Elimination if the equations are lined up. Both find the exact same 'Intersection Point'."},
      {title: "Factoring Trinomials", sub: "Quadratics", week: "W1", phase: "gap", tip: "Master the 'X' method. Find two numbers that multiply to C and add to B. If you can't factor, the rest of the course will be a struggle!"},
      {title: "Completing the Square", sub: "Quadratics", week: "W2", phase: "gap", tip: "Half of B, squared. Add it to both sides. This creates a perfect square trinomial that is easy to solve with radicals."},
      {title: "Imaginary Numbers", sub: "Complex Systems", week: "W3", phase: "next", tip: "i is the square root of -1. Remember the cycle: i, -1, -i, 1. It repeats every 4 powers. Treat 'i' like a variable, but simplify i² to -1."},
      {title: "Polynomial Division", sub: "Functions", week: "W4", phase: "next", tip: "Synthetic division is your best friend for (x - k). Just bring down, multiply, and add. It's much faster than long division."}
    ],
    gaps: [
      {title: "Radical Expressions", sub: "Unit 3", week: "W1", phase: "gap", tip: "To simplify a radical, find the largest perfect square factor. √(50) = √(25*2) = 5√2. Keep the non-square part inside."},
      {title: "Rational Exponents", sub: "Skills", week: "W1-2", phase: "gap", tip: "Power over Root. x^(3/2) means take the square root and then cube it. It's just a different way to write radicals."},
      {title: "Exponential Functions", sub: "Unit 4 Prep", week: "W2", phase: "next", tip: "y = ab^x. If b is greater than 1, it grows. If b is between 0 and 1, it decays. The starting value is always 'a'."},
      {title: "Logarithms Intro", sub: "Inverse Functions", week: "W3", phase: "next", tip: "A log is just an exponent. log₂(8) = 3 because 2³ = 8. If you get stuck, rewrite the log as an exponential equation!"}
    ],
    shaky: [
      {title: "Function Transformations", sub: "Review", week: "W1", phase: "gap", tip: "Inside the parentheses moves left/right (opposite of sign). Outside moves up/down (same as sign). This works for every function in the class!"},
      {title: "Direct vs Inverse Variation", sub: "Ratios", week: "W1", phase: "gap", tip: "Direct: y = kx (both go up together). Inverse: y = k/x (as x goes up, y goes down). 'k' is your constant of variation."},
      {title: "Arithmetic Sequences", sub: "Current Unit", week: "W2", phase: "next", tip: "Sequences that add or subtract the same number (the common difference) every time. Think of it like a linear function."},
      {title: "Geometric Series", sub: "Patterns", week: "W3", phase: "next", tip: "Sequences that multiply by the same number (the common ratio) every time. These grow much faster than arithmetic ones!"}
    ],
    tip: { 
      lost: "Factoring is the most important skill in the class. If you can't factor a trinomial in under 30 seconds, you will struggle with Quadratics, Polynomials, and Rationals. Drill 'Diamond Method' or 'Slide and Divide' for 10 minutes every day.", 
      gaps: "Logarithms are just another way to write Exponents. log(base)answer = exponent. If you get stuck on a log problem, rewrite it as an exponent immediately. This one trick solves 90% of the introductory log units.", 
      shaky: "Function transformations are universal. f(x-h)+k moves ANY parent function (line, parabola, log, trig) exactly the same way. Master the 'h and k' shifts once, and you won't have to learn new graphing rules for every unit." 
    }
  },
  english11: {
    label: "English 11",
    lost: [
      {title: "Puritan Literature", sub: "American Lit", week: "W1", phase: "gap", tip: "Focus on the 'Plain Style' and the struggle between individual desire and community rules. Think: 'The Crucible' or 'Sinners in the Hands of an Angry God'."},
      {title: "Transcendentalism", sub: "Philosophy", week: "W1", phase: "gap", tip: "Emerson and Thoreau. Focus on 'Self-Reliance' and the idea that nature is a reflection of the human soul. It's the ultimate 'DIY' philosophy."},
      {title: "Gatsby: Themes", sub: "Modernism", week: "W2", phase: "gap", tip: "The 'American Dream' as an illusion. Look for symbols like the Green Light and the Valley of Ashes to see the contrast between hope and decay."},
      {title: "Harlem Renaissance", sub: "Unit 4", week: "W3", phase: "next", tip: "A celebration of Black culture and a demand for civil rights. Focus on Langston Hughes' poetry and the use of 'Jazz' rhythms in writing."},
      {title: "Post-Modernism", sub: "Unit 5", week: "W4", phase: "next", tip: "Stories that break the rules. Look for 'Unreliable Narrators' and stories that question the nature of reality itself. It's meant to be confusing!"}
    ],
    gaps: [
      {title: "Regionalism & Realism", sub: "Unit 3", week: "W1", phase: "gap", tip: "Stories that try to show life 'exactly as it is'. Focus on local dialects and the harsh reality of the American West or the Industrial North."},
      {title: "The Crucible: Allegory", sub: "Drama", week: "W1-2", phase: "gap", tip: "An allegory is a story with a hidden meaning. 'The Crucible' is about the Salem Witch Trials, but it's really about the 1950s Red Scare."},
      {title: "Arthur Miller's Style", sub: "Analysis", week: "W2", phase: "next", tip: "Miller uses high-stakes drama to explore moral choices. Look for how he uses 'Stage Directions' to tell you what a character is actually feeling."},
      {title: "Civil Rights Poetry", sub: "Literary Activism", week: "W3", phase: "next", tip: "Poetry used as a tool for change. Focus on 'Allusion'—how these poets reference the Bible or the Constitution to prove their points."}
    ],
    shaky: [
      {title: "Dashes & Parentheses", sub: "Grammar", week: "W1", phase: "gap", tip: "Use a dash (—) for a sudden break in thought or for emphasis. Use parentheses for information that is 'extra' but not essential."},
      {title: "Synthesis Essays", sub: "Writing", week: "W1", phase: "gap", tip: "You are the moderator of a debate. Don't just list what sources say; make them respond to each other. 'Source A agrees with Source B because...'"},
      {title: "Citing Multiple Sources", sub: "Research", week: "W2", phase: "next", tip: "MLA style: (Author 42). If you use two sources in one sentence, you need two citations. Make sure your Works Cited page matches your in-text tags!"},
      {title: "Tone Shift Detection", sub: "Analysis", week: "W3", phase: "next", tip: "Look for transition words like 'however' or 'suddenly'. A shift in tone often signals a change in the character's perspective or a plot twist."}
    ],
    tip: { 
      lost: "American Literature is the history of 'The American Dream'. From the Puritans to the Modernists, every author is reacting to that one idea. When you start a new text, ask: 'Is this author hopeful or cynical about the future of America?'", 
      gaps: "Synthesis writing is about creating a 'Conversation'. When you use multiple sources in an essay, think of it like a dinner party: How would Source A respond to Source B? Don't just list them; make them debate each other.", 
      shaky: "Rhetoric is the art of 'Persuasion'. Look for Ethos (Credibility), Pathos (Emotion), and Logos (Logic) in every speech or essay. Which one is the speaker relying on most? Why would they choose that specifically for their audience?" 
    }
  },
  econ: { 
    label: "Economics",
    lost: [
      {title: "Scarcity & Choice", sub: "Unit 1", week: "W1", phase: "gap", tip: "Everything is limited. Because you can't have everything, you have to choose. This is the 'Problem of Economics' that every society must solve."},
      {title: "Supply & Demand Curves", sub: "Market Basics", week: "W1", phase: "gap", tip: "Demand is down-sloping (D is for Down). Supply is up-sloping. The 'X' where they meet tells you the price you see at the store."},
      {title: "Opportunity Cost", sub: "Decision Making", week: "W2", phase: "gap", tip: "It's the 'Next Best Thing' you didn't do. If you spend $10 on a movie, the opportunity cost is the $10 you could have spent on lunch."},
      {title: "GDP Calculation", sub: "Macro", week: "W3", phase: "next", tip: "C + I + G + (X-M). Consumption + Investment + Government + Net Exports. This is the formula for the total output of a nation."},
      {title: "Inflation Types", sub: "Macro", week: "W4", phase: "next", tip: "Cost-Push (supplies get expensive) and Demand-Pull (too much money chasing too few goods). Both make your dollar worth less over time."}
    ],
    gaps: [
      {title: "Market Equilibrium", sub: "Unit 2", week: "W1", phase: "gap", tip: "The 'Sweet Spot'. At this price, the amount people want to buy exactly equals the amount businesses want to sell. No waste!"},
      {title: "Price Floors & Ceilings", sub: "Policy", week: "W1-2", phase: "gap", tip: "A Ceiling is a maximum price (like rent control). A Floor is a minimum price (like minimum wage). Both usually cause shortages or surpluses."},
      {title: "Federal Reserve Basics", sub: "Unit 4 Prep", week: "W2", phase: "next", tip: "The US central bank. They control the money supply. When they raise interest rates, they are trying to slow down inflation."},
      {title: "Monetary vs Fiscal Policy", sub: "Macro", week: "W3", phase: "next", tip: "Monetary = The Fed (Interest Rates). Fiscal = Congress (Taxes & Spending). Both are tools to fix a recession or a boom."}
    ],
    shaky: [
      {title: "Elasticity of Demand", sub: "Review", week: "W1", phase: "gap", tip: "How much does a price change affect your buying? If you NEED it (like gas), it's Inelastic. If you WANT it (like a steak), it's Elastic."},
      {title: "Perfect Competition", sub: "Market Structures", week: "W1", phase: "gap", tip: "Many sellers, identical products. No one has power over the price (like wheat farmers). This is the 'ideal' market for consumers."},
      {title: "Monopolies", sub: "Current Unit", week: "W2", phase: "next", tip: "One seller, unique product. They have total 'Price-Making' power. This is why the government regulates things like electric companies."},
      {title: "Oligopolies", sub: "Market Structures", week: "W3", phase: "next", tip: "A few big sellers (like cell phone carriers). They often follow each other's prices and compete via advertising instead of just price."}
    ],
    tip: { 
      lost: "Economics is all about 'Incentives'. Because resources are scarce, we have to make choices, and every choice has an 'Opportunity Cost' (the value of the next best thing you gave up). If you master this one concept, the whole course makes sense.", 
      gaps: "Supply and Demand is a dance. If the price isn't at equilibrium, the market will naturally push it there via a shortage or surplus. Draw the shifts: a change in 'Price' is just a move ALONG the curve, but a change in 'Preference' shifts the WHOLE curve.", 
      shaky: "Macroeconomics is about the 'Big Picture'. GDP, Inflation, and Unemployment are the 3 key health markers of an economy. Learn how the Government (Fiscal) and the Fed (Monetary) use their specific tools to adjust those markers during a recession." 
    }
  },
  english12: {
    label: "English 12",
    lost: [
      {title: "Beowulf & Epic Poetry", sub: "British Lit", week: "W1", phase: "gap", tip: "Old English is about 'Kenning' (like 'whale-road' for ocean). Focus on the Comitatus—the bond of loyalty between a king and his warriors."},
      {title: "Canterbury Tales", sub: "Middle English", week: "W1", phase: "gap", tip: "Chaucer uses 'Social Satire'. He mocks every level of society, from the greedy Pardoner to the worldly Prioress. Look for the hypocrisy!"},
      {title: "Shakespearean Sonnets", sub: "Renaissance", week: "W2", phase: "gap", tip: "14 lines, iambic pentameter, ending in a 'Couplet' (last two lines). The couplet always provides a twist or a summary of the poem."},
      {title: "Hamlet: Soliloquies", sub: "Unit 4", week: "W3", phase: "next", tip: "When a character speaks alone on stage. Hamlet's speeches are about 'Existentialism'—questioning the value of life and action."},
      {title: "Regency & Romantic Poets", sub: "Unit 5", week: "W4", phase: "next", tip: "A reaction against the Industrial Revolution. Wordsworth and Keats focus on the 'Sublime'—the overwhelming power and beauty of nature."}
    ],
    gaps: [
      {title: "Satire in Swift", sub: "Unit 3", week: "W1", phase: "gap", tip: "Swift uses 'Deadpan' irony. In 'A Modest Proposal', he suggests a horrific solution to poverty to shame the rich into actually helping."},
      {title: "Victorian Novel Intro", sub: "Social Critique", week: "W1-2", phase: "gap", tip: "Big books for a big empire. Focus on the 'Industrial Novel'—how the growth of factories created massive wealth and massive suffering."},
      {title: "Hardy vs Dickens", sub: "Comparative Analysis", week: "W2", phase: "next", tip: "Dickens is often hopeful and sentimental; Hardy is 'Naturalistic' and pessimistic. Compare how they treat their main characters' fates."},
      {title: "War Poetry (WWI)", sub: "20th Century", week: "W3", phase: "next", tip: "The shift from 'Glory' to 'Horror'. Compare early war poems (patriotic) to later ones (depicting the gas and the mud)."}
    ],
    shaky: [
      {title: "Complex Sentence Syntax", sub: "Grammar", week: "W1", phase: "gap", tip: "Vary your sentence length. Use 'Cumulative Sentences' (main idea first, then details) and 'Periodic Sentences' (big reveal at the very end)."},
      {title: "Abstract Nouns", sub: "Writing", week: "W1", phase: "gap", tip: "Words like 'Justice' or 'Freedom'. Don't just use them—define what they mean SPECIFICALLY in the context of the book you are reading."},
      {title: "College Essay Prep", sub: "Composition", week: "W2", phase: "next", tip: "Find your 'hook'. The first sentence must make the reader want to know more. Avoid clichés like 'Since the beginning of time...'"},
      {title: "Personal Voice", sub: "Composition", week: "W3", phase: "next", tip: "Write how you speak, but refined. Read your essay out loud—if it sounds like a robot or a textbook, it needs more 'You' in it."}
    ],
    tip: { 
      lost: "British Literature is the history of the English language. Watch it evolve from the guttural Old English of Beowulf to the refined Modernism of Virginia Woolf. Look for how each era tries to 'fix' the problems of the previous one.", 
      gaps: "Satire requires a 'Target'. When you read Swift or Orwell, ask: 'Who is being mocked, and what specific human behavior is the author trying to change?' If you can't identify the target, the irony won't make sense.", 
      shaky: "For the 'College Essay', your goal is 'Radical Authenticity'. Don't just list your accomplishments. Tell a story about a time you failed, learned a difficult lesson, or changed your mind. That vulnerability is what admissions officers actually value." 
    }
  }
};

// ... (Your massive CURRICULUM object is up here unchanged) ...

let currentDefaultTip = "";

function updateCourseOptions() {
  const grade = document.getElementById('inp-grade').value;
  const courseSelect = document.getElementById('inp-course');
  courseSelect.innerHTML = '<option value="">Select course...</option>';
  
  if (grade && GRADE_COURSES[grade]) {
    GRADE_COURSES[grade].forEach(key => {
      if (CURRICULUM[key]) {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = CURRICULUM[key].label;
        courseSelect.appendChild(opt);
      }
    });
    courseSelect.disabled = false;
  } else {
    courseSelect.disabled = true;
  }
  validateForm();
}

function selectProg(el) {
  document.querySelectorAll('.prog-row').forEach(r => r.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('input').checked = true;
  validateForm();
}

function validateForm() {
  const name = document.getElementById('inp-name').value.trim();
  const grade = document.getElementById('inp-grade').value;
  const course = document.getElementById('inp-course').value;
  const prog = document.querySelector('input[name="prog"]:checked');
  document.getElementById('gen-btn').disabled = !(name && grade && course && prog);
}

function updateTipText(html) {
  const tipEl = document.getElementById('tip-text');
  tipEl.classList.remove('tip-animate');
  void tipEl.offsetWidth;
  tipEl.innerHTML = html;
  tipEl.classList.add('tip-animate');
}

function renderList(items, containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  items.forEach((m, idx) => {
    const div = document.createElement('div');
    div.className = 'milestone';
    div.style.animationDelay = (idx * 0.08) + 's';
    div.innerHTML = `
      <div class="check"><svg class="checkmark" viewBox="0 0 10 8"><polyline points="1 4 3.5 6.5 9 1"/></svg></div>
      <div class="m-content">
        <div class="m-title">${m.title}</div>
        <div class="m-sub">${m.sub}</div>
      </div>
      <span class="m-week ${m.phase === 'gap' ? 'week-now' : 'week-soon'}">${m.week}</span>`;
    
    div.onclick = (e) => {
      e.stopPropagation();
      div.classList.toggle('done');
      updateProgress();
    };

    div.onmouseenter = () => {
      if (m.tip) {
        updateTipText(`<strong>${m.title}:</strong> ${m.tip}`);
      }
    };
    
    div.onmouseleave = () => {
      updateTipText(currentDefaultTip);
    };

    el.appendChild(div);
  });
}

function updateProgress() {
  const total = document.querySelectorAll('.milestone').length;
  const done = document.querySelectorAll('.milestone.done').length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  document.getElementById('pb-pct').textContent = pct + '%';
  document.getElementById('pb-fill').style.width = pct + '%';
}

function goBack() {
  document.getElementById('s-roadmap').classList.remove('active');
  document.getElementById('s-diag').classList.add('active');
}

document.getElementById('inp-name').oninput = validateForm;


// ==================== FULL-STACK BACKEND WIRES ====================

function generateRoadmap() {
  const name = document.getElementById('inp-name').value.trim();
  const grade = document.getElementById('inp-grade').value;
  const courseKey = document.getElementById('inp-course').value;
  const progInput = document.querySelector('input[name="prog"]:checked');
  const prog = progInput ? progInput.value : null;
  
  const structuredTrackSignature = `${courseKey}|${prog}`;

  buildRoadmapUI(name, grade, courseKey, prog);

  const currentLoggedInUser = localStorage.getItem('username') || name; 

  fetch('/save-track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: currentLoggedInUser,
      track: structuredTrackSignature
    })
  })
  .then(res => res.json())
  .then(data => console.log('🔄 Cloud Sync Completed:', data.message))
  .catch(err => console.error('❌ Cloud Sync failed, relying on client runtime:', err));
}

function buildRoadmapUI(name, grade, courseKey, prog) {
  const data = CURRICULUM[courseKey];
  if (!data) return;

  document.getElementById('r-name').textContent = name;
  document.getElementById('r-meta').textContent = `${grade}th Grade · ${data.label}`;

  const badgeEl = document.getElementById('r-badge');
  const badges = {
    lost: ['Needs Foundation', 'badge-coral'],
    gaps: ['Bridging Gaps', 'badge-amber'],
    shaky: ['Polishing', 'badge-teal']
  };
  badgeEl.textContent = badges[prog][0];
  badgeEl.className = 'badge ' + badges[prog][1];

  const milestones = data[prog];
  const gaps = milestones.filter(m => m.phase === 'gap');
  const nexts = milestones.filter(m => m.phase === 'next');

  renderList(gaps, 'gaps-list');
  renderList(nexts, 'next-list');
  
  currentDefaultTip = `<strong>Study Strategy:</strong> ${data.tip[prog] || "Focus on consistent daily review."}`;
  updateTipText(currentDefaultTip);
  updateProgress();

  document.getElementById('s-diag').classList.remove('active');
  document.getElementById('s-roadmap').classList.add('active');
}

async function checkExistingUserRoadmap() {
  const activeUser = localStorage.getItem('username');
  if (!activeUser) return; 

  try {
    const response = await fetch('/api/students');
    const roster = await response.json();
    
    const userProfile = roster.find(student => student.username === activeUser);
    
    if (userProfile && userProfile.roadmap_track) {
      const [savedCourse, savedProg] = userProfile.roadmap_track.split('|');
      
      if (CURRICULUM[savedCourse]) {
        console.log(`🎯 Found existing ecosystem roadmap for ${activeUser}. Hydrating cloud data...`);
        
        let parsedGrade = "9";
        if (["geometry", "chemistry", "us_hist", "english10"].includes(savedCourse)) parsedGrade = "10";
        if (["algebra2", "physics", "usgov", "english11"].includes(savedCourse)) parsedGrade = "11";
        if (["precalc", "ap_stats", "econ", "english12"].includes(savedCourse)) parsedGrade = "12";

        buildRoadmapUI(activeUser, parsedGrade, savedCourse, savedProg);
      }
    }
  } catch (error) {
    console.warn("Could not auto-hydrate roadmap view from cloud server network context.", error);
  }
}

window.addEventListener('DOMContentLoaded', checkExistingUserRoadmap);