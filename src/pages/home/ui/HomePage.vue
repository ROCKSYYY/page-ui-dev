<script setup lang="ts">
import { useReveal } from '@/shared/lib/useReveal'
import { NavBar } from '@/widgets/nav-bar'
import { HeroSection } from '@/widgets/hero-section'
import { StatsSection } from '@/widgets/stats-section'
import { PriceStrip } from '@/widgets/price-strip'
import { ProblemSection } from '@/widgets/problem-section'
import { ApproachSection } from '@/widgets/approach-section'
import { SolutionsSection } from '@/widgets/solutions-section'
import { StackSection } from '@/widgets/stack-section'
import { CasesSection } from '@/widgets/cases-section'
import { WhySection } from '@/widgets/why-section'
import { ReviewsSection } from '@/widgets/reviews-section'
import { TeamSection } from '@/widgets/team-section'
import { FaqSection } from '@/widgets/faq-section'
import { CtaSection } from '@/widgets/cta-section'
import { AppFooter } from '@/widgets/app-footer'

useReveal()
</script>

<template>
  <div>
    <NavBar />
    <HeroSection />
    <StatsSection />
    <PriceStrip />
    <ProblemSection />
    <ApproachSection />
    <SolutionsSection />
    <StackSection />
    <CasesSection />
    <WhySection />
    <ReviewsSection />
    <TeamSection />
    <FaqSection />
    <CtaSection />
    <AppFooter />
  </div>
</template>
