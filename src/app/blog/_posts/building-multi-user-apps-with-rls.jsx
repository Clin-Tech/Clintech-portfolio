import React from "react";

export default function BuildingMultiUserAppsWithRLS() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Building Multi-User Apps with Supabase RLS</h1>

      <p>
        When you move from toy projects to real products, the hard problem
        isn&apos;t styling cards. It&apos;s isolation: how do you make sure each
        user only sees their own data? With Supabase, the real answer is not
        “checking user IDs in the frontend”, it&apos;s Row Level Security (RLS).
      </p>

      <h2>What RLS is, and why it matters</h2>

      <p>
        Row Level Security is a Postgres feature that lets you define policies
        on tables which execute for every query. Instead of trusting the client
        to send the “right” filters, the database enforces things like:
      </p>

      <pre>
        <code>
          {`CREATE POLICY "Users can see their jobs"
ON jobs FOR SELECT
USING (user_id = auth.uid());`}
        </code>
      </pre>

      <p>
        With RLS enabled, even if someone opens DevTools and calls the Supabase
        API manually, they still only get rows where the condition is true.
        That&apos;s a big step up from “we filter by userId in React and hope no
        one cheats.”
      </p>

      <h2>How ApplyCraft uses RLS</h2>

      <p>
        In my ApplyCraft project (an AI-powered job tracker), every job, note,
        and profile is scoped by the authenticated user. The core tables share
        the same idea:
      </p>

      <ul>
        <li>
          <code>jobs.user_id = auth.uid()</code>
        </li>
        <li>
          <code>job_notes.user_id = auth.uid()</code>
        </li>
        <li>
          <code>profiles.id = auth.uid()</code>
        </li>
      </ul>

      <p>
        Policies enforce that users can only select, insert, update, and delete
        rows where that check passes. Even the AI endpoint, which updates
        outreach fields on a job, verifies that the job belongs to the current
        user before writing.
      </p>

      <h2>Common mistakes with RLS</h2>

      <ul>
        <li>
          <strong>Enabling RLS but leaving “allow all” policies.</strong>{" "}
          You&apos;ve technically turned it on, but effectively disabled it. Be
          explicit.
        </li>
        <li>
          <strong>Forgetting write policies.</strong> It&apos;s easy to add
          SELECT and forget INSERT/UPDATE/DELETE, then wonder why your app
          silently fails.
        </li>
        <li>
          <strong>Trusting only frontend checks.</strong> If your table allows
          unrestricted select, users can bypass your UI and call the REST
          endpoint directly.
        </li>
        <li>
          <strong>Not joining on user-owned keys.</strong> If a table depends on
          a foreign key (like notes → jobs), your policies should reflect that
          ownership chain.
        </li>
      </ul>

      <p>
        Supabase RLS is the difference between “multi-user UI” and “multi-tenant
        product.” Once you start treating the database as the security gate,
        your frontend becomes simpler and your app becomes much harder to abuse.
      </p>
    </article>
  );
}
