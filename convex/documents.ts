import { query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {
    userId: v.string(),
 },
  handler: async (ctx, args) => {
    const { userId } = args;
    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", userId))
      .order("desc")
      .collect();
  },
});
