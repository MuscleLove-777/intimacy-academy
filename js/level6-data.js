/* ============================================
   インティマシーアカデミー - Level 6: パートナーシップの極意
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "パートナーシップの極意",
    icon: "💍",
    description: "長期的に満足度の高い関係を維持する知恵",
    modules: [

        {
            id: 601,
            title: "ゴットマンの関係理論",
            duration: "12分",
            content: `
<h2>🔬 ゴットマンの関係理論</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>心理学者ジョン・ゴットマンは40年以上の研究で、<strong>カップルが長続きするかどうかを94%の精度で予測</strong>できる要因を発見しました。</p>
</div>

<h3>☠️ 関係を壊す「四騎士」</h3>

<div class="visual-box">
<div class="visual-box-title">ゴットマンの黙示録の四騎士</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;padding:15px 0;">
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;">
<div style="font-size:1.5rem;">⚔️</div>
<div style="font-weight:700;font-size:0.9rem;">批判（Criticism）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">行動ではなく人格を攻撃する<br>「あなたはいつも〜」</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;">
<div style="font-size:1.5rem;">🛡️</div>
<div style="font-weight:700;font-size:0.9rem;">防御（Defensiveness）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">言い訳・責任転嫁<br>「私のせいじゃない」</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;">
<div style="font-size:1.5rem;">😤</div>
<div style="font-weight:700;font-size:0.9rem;">侮蔑（Contempt）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">見下し・嘲笑・皮肉<br>最も破壊力が高い</div>
</div>
<div style="background:#FFCDD2;border:2px solid #E53935;border-radius:12px;padding:16px;">
<div style="font-size:1.5rem;">🧱</div>
<div style="font-weight:700;font-size:0.9rem;">逃避（Stonewalling）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">会話を遮断・無視<br>「もう話したくない」</div>
</div>
</div>
</div>

<h3>💚 四騎士への対処法</h3>

<table>
<tr><th>四騎士</th><th>代わりにすべきこと</th></tr>
<tr><td>批判</td><td>「あなたは〜」ではなく「<strong>私は〇〇と感じた</strong>」（Iメッセージ）</td></tr>
<tr><td>防御</td><td>「そうだったんだね、ごめん」と<strong>まず受け止める</strong></td></tr>
<tr><td>侮蔑</td><td>日頃から<strong>感謝と尊敬を言葉にする</strong>（最重要！）</td></tr>
<tr><td>逃避</td><td>「少し落ち着く時間が必要」と伝えて<strong>20分後に再開</strong></td></tr>
</table>

<h3>📊 5:1の法則</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 ゴットマン比率</div>
<p>幸せなカップルは、ネガティブなやり取り1回に対して、<strong>ポジティブなやり取りが5回以上</strong>あります。日頃から感謝・褒め・笑い・愛情表現を意識的に増やしましょう。</p>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>関係を壊す<strong>四騎士</strong>（批判・防御・侮蔑・逃避）を避ける</li>
<li>特に<strong>侮蔑（見下し）</strong>が最も破壊力が高い</li>
<li><strong>5:1の法則</strong>でポジティブなやり取りを増やす</li>
</ul>
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "ゴットマンの四騎士で最も破壊力が高いのはどれですか？", options: ["批判", "防御", "侮蔑", "逃避"], answer: 2, explanation: "侮蔑（見下し・嘲笑・皮肉）が最も破壊力が高く、関係崩壊の最大の予測因子です。" },
                { id: "q601_2", type: "choice", question: "ゴットマン比率（5:1の法則）の意味として正しいのはどれですか？", options: ["5回のデートに1回は家デート", "ネガティブ1回に対しポジティブ5回以上", "1週間に5回は連絡する", "5年に1回は旅行する"], answer: 1, explanation: "幸せなカップルはネガティブ1回に対してポジティブ5回以上のやり取りがあります。" },
            ]
        },

        {
            id: 602,
            title: "アタッチメントスタイル",
            duration: "12分",
            content: `
<h2>🔗 アタッチメントスタイル</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>アタッチメントスタイル（愛着スタイル）とは、<strong>親密な関係における感情的な関わり方のパターン</strong>です。自分とパートナーのスタイルを知ることで、関係の改善に役立ちます。</p>
</div>

<h3>📊 4つのアタッチメントスタイル</h3>

<div class="visual-box">
<div class="visual-box-title">愛着スタイルのマトリックス</div>
<table style="width:100%;max-width:550px;margin:0 auto;border-collapse:collapse;">
<tr>
<td style="width:50%;background:#E8F5E9;border:2px solid #4CAF50;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">安定型（Secure）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">信頼と自立のバランス<br>親密さに心地よさを感じる</div>
<div style="font-size:0.75rem;margin-top:8px;">人口の約50%</div>
</td>
<td style="width:50%;background:#FCE4EC;border:2px solid #E91E63;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">不安型（Anxious）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">親密さを強く求める<br>見捨てられる不安が強い</div>
<div style="font-size:0.75rem;margin-top:8px;">人口の約20%</div>
</td>
</tr>
<tr>
<td style="background:#E3F2FD;border:2px solid #1976D2;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">回避型（Avoidant）</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">自立を重視<br>親密さに不快感</div>
<div style="font-size:0.75rem;margin-top:8px;">人口の約25%</div>
</td>
<td style="background:#FFF3E0;border:2px solid #FF9800;padding:16px;text-align:center;">
<div style="font-weight:700;font-size:1rem;">恐れ回避型</div>
<div style="font-size:0.8rem;color:#666;margin-top:4px;">親密さを求めるが<br>同時に恐れる</div>
<div style="font-size:0.75rem;margin-top:8px;">人口の約5%</div>
</td>
</tr>
</table>
</div>

<h3>🔄 スタイル別の関係の特徴</h3>

<table>
<tr><th>スタイル</th><th>恋愛での傾向</th><th>パートナーへのアドバイス</th></tr>
<tr><td>安定型</td><td>安定した関係を築きやすい</td><td>そのまま自然に接する</td></tr>
<tr><td>不安型</td><td>嫉妬・確認行動が多い</td><td>安心感を言葉で伝える</td></tr>
<tr><td>回避型</td><td>距離を置きたがる</td><td>追いかけず、安全な空間を作る</td></tr>
<tr><td>恐れ回避型</td><td>近づきたいが怖い</td><td>一貫した態度で信頼を築く</td></tr>
</table>

<div class="info-box formula">
<div class="info-box-title">🔑 アタッチメントスタイルは変えられる</div>
<p>アタッチメントスタイルは<strong>固定されたものではなく、意識的な努力で変化</strong>させることができます：</p>
<ul>
<li><strong>安定型のパートナー</strong>との関係で安定に近づく</li>
<li><strong>自分のパターン</strong>に気づくことが第一歩</li>
<li><strong>カウンセリング</strong>で過去の傷を癒す</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>アタッチメントスタイルは<strong>4種類</strong>（安定・不安・回避・恐れ回避）</li>
<li>自分とパートナーのスタイルを<strong>理解する</strong>ことが改善の鍵</li>
<li>スタイルは<strong>変えられる</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "不安型アタッチメントのパートナーに最も効果的な対応はどれですか？", options: ["距離を置く", "安心感を言葉で伝える", "嫉妬を無視する", "自立を促す"], answer: 1, explanation: "不安型の人は見捨てられる不安が強いため、言葉で安心感を伝えることが最も効果的です。" },
            ]
        },

        {
            id: 603,
            title: "長続きするカップルの秘訣",
            duration: "10分",
            content: `
<h2>💎 長続きするカップルの秘訣</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>長続きするカップルの秘訣は「完璧な相性」ではなく、<strong>「問題に対する向き合い方」</strong>です。すべてのカップルに問題はありますが、幸せなカップルはその扱い方が違います。</p>
</div>

<h3>🔑 研究で実証された7つの習慣</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>「ビッド」に応答する</strong>
パートナーが注意を求めるサイン（ビッド）に気づいて応答する。「見てこれ面白い」→「どれどれ？」と反応する。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>感謝を毎日伝える</strong>
「ありがとう」「助かった」を毎日言葉にする。当たり前にしない。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>修復の試みを受け入れる</strong>
ケンカの最中でもパートナーが関係を修復しようとするサインを見逃さない。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>パートナーの「ラブマップ」を更新する</strong>
相手の好きなもの・夢・不安・ストレスを常に知ろうとする。人は変わるから。
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<strong>共有の意味を作る</strong>
二人だけの思い出・ジョーク・伝統を大切にする。
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<strong>夢をサポートする</strong>
パートナーの個人的な夢や目標を応援し、成長を喜ぶ。
</div>
</div>
<div class="step">
<div class="step-num">7</div>
<div class="step-content">
<strong>セックスを大切にし続ける</strong>
身体的な親密さは関係の重要な柱。意識的に優先順位を上げる。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>長続きの秘訣は<strong>完璧な相性ではなく、日々の小さな習慣</strong></li>
<li>パートナーの<strong>ビッド（注意を求めるサイン）に応答</strong>する</li>
<li><strong>感謝を毎日</strong>伝える</li>
</ul>
</div>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "ゴットマンの研究で「ビッド」とは何を指しますか？", options: ["プロポーズ", "パートナーが注意を求めるサイン", "デートの誘い", "謝罪"], answer: 1, explanation: "ビッドとはパートナーが発する注意・反応を求めるサインです。これに応答するかどうかが関係の満足度を左右します。" },
            ]
        },

        {
            id: 604,
            title: "最終メッセージ：愛は技術",
            duration: "8分",
            content: `
<h2>🌟 最終メッセージ：愛は技術</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>心理学者エーリッヒ・フロムは著書『愛するということ』で、<strong>愛は感情ではなく技術である</strong>と述べました。学び、練習し、磨き続けるものです。</p>
</div>

<h3>📚 このコースで学んだこと</h3>

<div class="visual-box">
<div class="visual-box-title">学習の全体像</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#FCE4EC;border-left:4px solid #E91E63;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv1</strong>：魅力と出会い — 自分を磨き、出会いを作る
</div>
<div style="background:#F3E5F5;border-left:4px solid #9C27B0;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv2</strong>：関係の深め方 — 段階的に距離を縮める
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv3</strong>：同意と安全 — すべての基盤となる尊重
</div>
<div style="background:#FFF3E0;border-left:4px solid #FF9800;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv4</strong>：身体の理解 — 科学的知識とスキル
</div>
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv5</strong>：ケアと絆 — 行為の後こそ大切
</div>
<div style="background:#FFCDD2;border-left:4px solid #E53935;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv6</strong>：パートナーシップ — 長く幸せに続ける知恵
</div>
</div>
</div>

<h3>🎯 明日から実践してほしい3つのこと</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>コミュニケーションを最優先にする</strong>
すべての素晴らしい関係の基盤は、オープンで誠実なコミュニケーションです。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>同意と尊重を常に意識する</strong>
相手の気持ちと境界線を尊重すること。これは恋愛に限らず、すべての人間関係の基本です。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>完璧を目指さない</strong>
失敗して当然。大切なのは失敗から学び、成長し続けること。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">🎉 全コース完了おめでとうございます！</div>
<p>このコースの根底にある最も大切なメッセージ：</p>
<p style="text-align:center;font-size:1.3rem;font-weight:800;color:var(--primary);margin:16px 0;">「相手を一人の人間として尊重し、<br>心を込めて向き合うこと」</p>
<p>テクニックや知識は道具にすぎません。相手を大切に思い、誠実に向き合う姿勢があれば、素晴らしい関係は必ず築けます。</p>
<p>あなたの素敵なパートナーシップを応援しています。</p>
</div>
`,
            quiz: [
                { id: "q604_1", type: "choice", question: "エーリッヒ・フロムが「愛するということ」で述べた愛の本質とは？", options: ["愛は運命で決まる", "愛は感情ではなく技術である", "愛は自然に生まれるもの", "愛は若い時だけのもの"], answer: 1, explanation: "フロムは愛を学び・練習し・磨き続ける「技術」だと述べました。" },
                { id: "q604_2", type: "choice", question: "このコース全体を通して最も重要なメッセージはどれですか？", options: ["テクニックをたくさん覚える", "完璧なパフォーマンスを目指す", "相手を一人の人間として尊重し、心を込めて向き合う", "できるだけ多くの経験を積む"], answer: 2, explanation: "すべてのスキルの根底にあるのは、相手を尊重し誠実に向き合うことです。" },
            ]
        },
    ]
};
