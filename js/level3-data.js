/* ============================================
   インティマシーアカデミー - Level 3: 同意とセーファーセックス
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "同意とセーファーセックス",
    icon: "🛡",
    description: "安全で健全な性的関係の基盤を学ぶ",
    modules: [

        {
            id: 301,
            title: "同意（コンセント）の原則",
            duration: "12分",
            content: `
<h2>✅ 同意（コンセント）の原則</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>同意は性的関係の<strong>絶対的な前提条件</strong>です。「嫌がっていないから大丈夫」ではなく、<strong>「明確なイエスがあって初めてOK」</strong>です。</p>
</div>

<h3>📐 FRIESフレームワーク</h3>

<div class="visual-box">
<div class="visual-box-title">有効な同意の5つの条件</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>F - Freely Given（自発的）</strong><br>
<span style="font-size:0.85rem;">圧力・脅迫・酩酊状態なしに、自由意志で与えられたもの</span>
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>R - Reversible（撤回可能）</strong><br>
<span style="font-size:0.85rem;">途中でいつでも「やめたい」と言える。一度OKしても撤回できる</span>
</div>
<div style="background:#FFF3E0;border-left:4px solid #FF9800;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>I - Informed（情報に基づく）</strong><br>
<span style="font-size:0.85rem;">何に同意しているか理解した上での同意</span>
</div>
<div style="background:#FCE4EC;border-left:4px solid #E91E63;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>E - Enthusiastic（積極的）</strong><br>
<span style="font-size:0.85rem;">「まあいいか」ではなく、「したい！」という積極的な同意</span>
</div>
<div style="background:#F3E5F5;border-left:4px solid #9C27B0;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>S - Specific（具体的）</strong><br>
<span style="font-size:0.85rem;">キスへの同意がそれ以上の行為への同意を意味しない</span>
</div>
</div>
</div>

<h3>🚫 同意にならないもの</h3>

<div class="info-box danger">
<div class="info-box-title">⛔ これは同意ではない</div>
<ul>
<li><strong>酩酊状態</strong>での同意（判断能力がない）</li>
<li><strong>沈黙・無反応</strong>（「嫌と言わなかった」≠ 同意）</li>
<li><strong>脅迫・圧力</strong>下での同意（断れない状況）</li>
<li><strong>過去の同意</strong>（前回OKだった ≠ 今回もOK）</li>
<li><strong>交際しているから</strong>（恋人でも毎回同意が必要）</li>
<li><strong>途中から嫌がっている</strong>のに続行</li>
</ul>
</div>

<h3>💬 同意の確認フレーズ</h3>

<table>
<tr><th>場面</th><th>確認フレーズ</th></tr>
<tr><td>行為の前</td><td>「〇〇してもいい？」「したいことある？」</td></tr>
<tr><td>行為中</td><td>「気持ちいい？」「大丈夫？」「続けていい？」</td></tr>
<tr><td>新しいことを試す前</td><td>「〇〇やってみたいんだけど、どう思う？」</td></tr>
<tr><td>相手の様子が変わった時</td><td>「止めようか？」「どうしたい？」</td></tr>
</table>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>同意は<strong>FRIES</strong>（自発的・撤回可能・情報に基づく・積極的・具体的）</li>
<li>沈黙は同意ではない。<strong>明確なイエスが必要</strong></li>
<li>同意の確認は<strong>毎回・行為ごと</strong>に行う</li>
</ul>
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "FRIESフレームワークの「R」は何を意味しますか？", options: ["Romantic（ロマンチック）", "Reversible（撤回可能）", "Responsible（責任ある）", "Respectful（尊重する）"], answer: 1, explanation: "Rは「Reversible（撤回可能）」です。一度同意しても途中でいつでも撤回できます。" },
                { id: "q301_2", type: "choice", question: "以下のうち、有効な同意に該当するのはどれですか？", options: ["酔った状態での「いいよ」", "相手が沈黙している", "「したい！」と積極的に言っている", "過去に同意したことがある"], answer: 2, explanation: "有効な同意は、自発的で積極的な意思表示です。酩酊状態や沈黙は同意ではありません。" },
            ]
        },

        {
            id: 302,
            title: "避妊と性感染症予防",
            duration: "12分",
            content: `
<h2>🩺 避妊と性感染症予防</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>セーファーセックスは<strong>自分とパートナーの健康を守る行為</strong>です。避妊と性感染症（STI）予防は、責任ある性行為の基本です。</p>
</div>

<h3>🛡 避妊方法の比較</h3>

<table>
<tr><th>方法</th><th>避妊率</th><th>STI予防</th><th>特徴</th></tr>
<tr><td>コンドーム（男性用）</td><td>約85〜98%</td><td>✅ あり</td><td>唯一STI予防もできる。正しい使い方が重要</td></tr>
<tr><td>低用量ピル</td><td>約92〜99%</td><td>❌ なし</td><td>毎日服用。コンドームとの併用推奨</td></tr>
<tr><td>IUD（子宮内避妊器具）</td><td>約99%</td><td>❌ なし</td><td>長期間有効。医師による装着</td></tr>
<tr><td>緊急避妊薬</td><td>約85%</td><td>❌ なし</td><td>事後72時間以内。常用は不可</td></tr>
</table>

<h3>⚠️ 主な性感染症（STI）</h3>

<table>
<tr><th>STI</th><th>症状</th><th>対処</th></tr>
<tr><td>クラミジア</td><td>無症状のことが多い。放置で不妊リスク</td><td>抗生物質で治療可能</td></tr>
<tr><td>淋病</td><td>排尿痛・分泌物</td><td>抗生物質で治療可能</td></tr>
<tr><td>梅毒</td><td>しこり→発疹→潜伏（無症状期あり）</td><td>早期なら抗生物質で完治</td></tr>
<tr><td>ヘルペス</td><td>水疱・痛み（再発あり）</td><td>薬で症状管理。完治は困難</td></tr>
<tr><td>HPV</td><td>尖圭コンジローマ・子宮頸がんリスク</td><td>ワクチンで予防可能</td></tr>
<tr><td>HIV</td><td>初期はインフル様症状→潜伏期</td><td>早期治療で通常の寿命。検査が重要</td></tr>
</table>

<h3>🏥 定期検査の重要性</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 検査の目安</div>
<ul>
<li><strong>新しいパートナーとの関係開始前</strong>に検査</li>
<li><strong>年に1回</strong>は定期検査（性的に活発な場合）</li>
<li><strong>コンドームなしの性行為</strong>があった場合はすぐに検査</li>
<li>多くのSTIは<strong>無症状</strong>のため、症状がなくても検査が必要</li>
<li>保健所では<strong>無料・匿名</strong>で検査可能</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>コンドーム</strong>は避妊とSTI予防の両方に有効</li>
<li><strong>ピルとコンドームの併用</strong>（デュアルメソッド）が最も安全</li>
<li><strong>定期的な性感染症検査</strong>は責任ある行動</li>
</ul>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "避妊と性感染症予防の両方に効果がある方法はどれですか？", options: ["低用量ピル", "コンドーム", "IUD", "緊急避妊薬"], answer: 1, explanation: "コンドームは唯一、避妊とSTI予防の両方の効果がある方法です。" },
                { id: "q302_2", type: "choice", question: "性感染症の検査について正しいのはどれですか？", options: ["症状が出たときだけ受ければよい", "パートナーが一人なら不要", "多くのSTIは無症状なので定期検査が重要", "一度検査すればもう不要"], answer: 2, explanation: "多くのSTIは無症状のため、症状がなくても定期的な検査が重要です。" },
            ]
        },

        {
            id: 303,
            title: "性的コミュニケーション",
            duration: "10分",
            content: `
<h2>🗣 性的コミュニケーション</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>性的な話題をパートナーと<strong>オープンに話し合える</strong>ことが、満足度の高い性生活の最大の鍵です。恥ずかしいことではなく、<strong>信頼の証</strong>です。</p>
</div>

<h3>📋 イエス/ノー/メイビーリスト</h3>

<div class="visual-box">
<div class="visual-box-title">パートナーとの性的嗜好の共有ツール</div>
<div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:1.5rem;">✅</div>
<div style="font-weight:700;">イエス</div>
<div style="font-size:0.8rem;color:#666;">やりたいこと<br>好きなこと</div>
</div>
<div style="background:#FFF3E0;border:2px solid #FF9800;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:1.5rem;">🤔</div>
<div style="font-weight:700;">メイビー</div>
<div style="font-size:0.8rem;color:#666;">興味はある<br>話し合ってから</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;text-align:center;min-width:150px;">
<div style="font-size:1.5rem;">❌</div>
<div style="font-weight:700;">ノー</div>
<div style="font-size:0.8rem;color:#666;">やりたくないこと<br>絶対NG</div>
</div>
</div>
<p style="font-size:0.85rem;color:#666;margin-top:10px;">お互いのリストを見比べて、重なる部分から始めましょう。ノーは絶対に尊重します。</p>
</div>

<h3>💬 話し合いのコツ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>行為の最中ではなく、別の場面で話す</strong>
リラックスした環境で、冷静に話し合う。ベッドの外が話しやすい。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>ポジティブなフレーミングで</strong>
「〇〇されるのが嫌」ではなく「△△してくれると嬉しい」と伝える。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>相手の好みも聴く</strong>
「あなたはどうされると嬉しい？」と相手にも聞く。一方的にならない。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>ジャッジしない</strong>
相手の好みに対して「変だ」「おかしい」と否定しない。違いを受け入れる。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>イエス/ノー/メイビーリスト</strong>で嗜好を共有する</li>
<li>性の話し合いは<strong>ベッドの外で・ポジティブに</strong></li>
<li>相手の好みを<strong>ジャッジしない</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "性的な好みをパートナーと話し合うベストなタイミングはいつですか？", options: ["行為の最中", "行為の直後", "リラックスした別の場面", "喧嘩の後"], answer: 2, explanation: "行為の最中は感情が高ぶっているため、リラックスした別の場面で冷静に話し合うのがベストです。" },
                { id: "q303_2", type: "choice", question: "パートナーの性的な好みが自分と異なるとき、適切な対応はどれですか？", options: ["「変だ」と率直に伝える", "自分が我慢して合わせる", "違いを受け入れ、共通点を探す", "話題を避ける"], answer: 2, explanation: "好みの違いは自然なことです。ジャッジせずに違いを受け入れ、お互いが楽しめる共通点を探しましょう。" },
            ]
        },

        {
            id: 304,
            title: "ムード作りと環境設定",
            duration: "10分",
            content: `
<h2>🕯 ムード作りと環境設定</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>親密な時間は<strong>環境と心理的な安心感</strong>が大きく影響します。お互いがリラックスして心地よくいられる空間を作りましょう。</p>
</div>

<h3>🏠 空間の準備</h3>

<table>
<tr><th>要素</th><th>ポイント</th></tr>
<tr><td>清潔さ</td><td>部屋・ベッド・バスルームを清潔に。これが最も重要</td></tr>
<tr><td>照明</td><td>間接照明やキャンドルでリラックスした雰囲気を</td></tr>
<tr><td>温度</td><td>心地よい室温（裸でも寒くない程度）</td></tr>
<tr><td>音楽</td><td>穏やかなBGMでリラックス感を演出</td></tr>
<tr><td>必需品</td><td>コンドーム・ティッシュ・飲み物を手の届く場所に</td></tr>
</table>

<h3>💆 心の準備</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>プレッシャーをかけない</strong>
「今日は泊まってね」と最初から決めつけない。相手が帰りたくなったら帰れるようにする。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>リラックスする時間を作る</strong>
いきなり行為に入らず、一緒に映画を観たり、お酒を少し飲んだり、会話を楽しんだり。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>衛生面の配慮</strong>
シャワーや歯磨きは相手への気遣い。お互いに清潔でいることでリラックスできる。
</div>
</div>
</div>

<div class="info-box warning">
<div class="info-box-title">⚠️ アルコールと同意について</div>
<p>お酒でリラックスするのは構いませんが：</p>
<ul>
<li><strong>泥酔状態</strong>での性行為は同意が成立しない</li>
<li>お酒を<strong>同意を引き出すために使わない</strong></li>
<li>「飲ませて抵抗力を下げる」は<strong>犯罪行為</strong></li>
<li>お互いが<strong>判断力を保てる程度</strong>に留める</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>清潔な空間</strong>が最も重要</li>
<li><strong>プレッシャーをかけない</strong>雰囲気作り</li>
<li>アルコールは<strong>判断力を保てる程度</strong>に</li>
</ul>
</div>
`,
            quiz: [
                { id: "q304_1", type: "choice", question: "ムード作りで最も重要な要素はどれですか？", options: ["高級なインテリア", "部屋やベッドの清潔さ", "ロマンチックな音楽", "お酒の種類"], answer: 1, explanation: "清潔さが最も重要です。どんなにムードを演出しても、不潔な環境では台無しです。" },
            ]
        },
    ]
};
