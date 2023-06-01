<template>
  <div class="p-4">
    <problem-tabs :id="+route.params.id"></problem-tabs>
    <h1 class="text-4xl my-4">{{ problem.id }}. {{ problem.title }}</h1>
    <ui-mathjax :body="problem.body"></ui-mathjax>
    <hr class="mt-4">
    <h2 class="text-2xl mt-4 mb-2">Input</h2>
    <ui-mathjax :body="problem.inputData"></ui-mathjax>
    <h2 class="text-2xl mt-4 mb-2">Output</h2>
    <ui-mathjax :body="problem.outputData"></ui-mathjax>

    <template v-for="(sample, index) in problem.sampleTests">
      <hr class="mt-4">
      <h2 class="text-2xl mt-4 mb-2">Sample input {{ index+1 }}</h2>
      <pre>{{ sample.input }}</pre>
      <h2 class="text-2xl mt-4 mb-2">Sample output {{ index+1 }}</h2>
      <pre>{{ sample.output }}</pre>
    </template>
    <hr class="mt-4 mb-2">
    
    <div class="grid gap-y-2" style="grid-template-columns: auto 1fr">
      <label class="font-bold p-2 text-right" for="submit-lang">Language</label>
      <select class="max-w-2xl" name="submit-lang">
        <option v-for="lang in problem.availableLanguages" :value="lang.lang">{{ langName[lang.lang] }}</option>
      </select>
      <label class="font-bold p-2 text-right" for="submit-source">Source code</label>
      <textarea class="font-mono border-2" name="submit-source" rows="10"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { langName } from '@/components/ui-language.vue'

const problem = {
    "id": 338,
    "difficultyTitle": "Normal",
    "notSolved": 4,
    "solved": 28,
    "hasChecker": true,
    "attemptsCount": 63,
    "hasSolved": false,
    "hasAttempted": false,
    "tags": [
        {
            "id": 4,
            "name": "Ma`lumotlar tuzilmasi"
        },
        {
            "id": 2,
            "name": "Sikllar"
        }
    ],
    "solutionKepcoinValue": 0,
    "hasSolution": false,
    "authorUsername": "admin",
    "likesCount": 0,
    "dislikesCount": 0,
    "sampleTests": [
        {
            "input": "1",
            "output": "1",
            "problem": 338
        },
        {
            "input": "2",
            "output": "3",
            "problem": 338
        },
        {
            "input": "13",
            "output": "7",
            "problem": 338
        },
        {
            "input": "4",
            "output": "0",
            "problem": 338
        }
    ],
    "availableLanguages": [
        {
            "lang": "py",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "cpp",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "hs",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "r",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "kt",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "c",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "php",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "cs",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        },
        {
            "lang": "js",
            "timeLimit": null,
            "memoryLimit": null,
            "codeTemplate": null
        }
    ],
    "canViewSolution": false,
    "voteType": null,
    "translateDone": false,
    "timeLimit": 2000,
    "memoryLimit": 512,
    "title": "Fibonachchi ketma-ketligi. Reverse",
    "body": "<p><strong>Fibonachchi</strong> sonlari ketma-ketligi deb dastlabki ikki hadi 1 ga teng bo&#39;lgan va har keyingi hadi avvalgi 2 ta hadi yig&#39;indisiga teng bo&#39;lgan sonlarga aytiladi.</p>\r\n\r\n<p><strong>Fibonachchi</strong> sonlari ketma-ketligi quyidagicha: <strong>1, 1, 2, 3, 5, 8, 13, ...</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sizga fibonachchi sonlari ketma-ketligini hadi berilgan, sizning vazifangiz ushbu son tartib bo&#39;yicha nechanchi had ekanligini topishdan iborat.</p>",
    "inputData": "<p>Birinchi qatorda natural son <strong>n(n &lt; 1000).</strong></p>",
    "outputData": "<p>Yagona qatorda masala yechimini chiqaring.</p>\r\n\r\n<p>Agarda bunday fibonachchi hadi mavjud bo&#39;lmasa 0 ni chiqaring.</p>\r\n\r\n<p>1 uchun javob tariqasida 1 ni chiqaring</p>",
    "comment": "",
    "codeTemplate": "",
    "difficulty": 3,
    "partialSolvable": false,
    "ogImage": "https://cpython.s3.amazonaws.com/media/images/problem-preview/338.webp",
    "image": null,
    "translateAuthor": null,
    "author": 207
}

const route = useRoute()

</script>